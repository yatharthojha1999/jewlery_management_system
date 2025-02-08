module.exports = function makeUpdateJweleryDetails({
    Joi,
    checkIsUserAllowedToHaveWriteAccess,
    jewelrySubTypesDb,
    jewelryTypesDb,
}) {
    return async function updateJweleryDetails({
        name, userId, type, code, SubTypename, concept, typeId, subTypeId,
    }) {
        console.info(`updateJweleryDetails usecase called`, {
            name, userId, type, code, SubTypename, concept, typeId, subTypeId,
        });

        // validatin userInput
        typeId = +typeId;
        validateInput({
            name, userId, type, code, SubTypename, concept, typeId, subTypeId,
        });

        // check if user has exist or not. if not throw error.
        const result = await checkIsUserAllowedToHaveWriteAccess({userId, checkForSuperAdmin: true});

        if (result !== '' && typeof result === 'string') {
            return result;
        }
        
        if (typeof result === undefined) {
            return result;
        }

        updatedAt = new Date();

        // update jewelry sub types.
        await jewelrySubTypesDb.updateJewelryDetails({type, code, name, concept, updatedAt, subTypeId});

        // get details from jewelrySubTypes.
        await jewelryTypesDb.updateJewelryDetails({name, updatedAt, typeId});

        return 'Data updated Successfully';

    }

    function validateInput({
        name, userId, type, code, SubTypename, concept, typeId, subTypeId,
    }) {
        const schema = Joi.object({
            userId: Joi.string().uuid().required(),
            name: Joi.string().required(),
            type: Joi.number().integer().strict().required(),
            code: Joi.string().required(),
            SubTypename: Joi.string().required(),
            concept: Joi.string().required(),
            typeId: Joi.number().integer().strict().required(),
            subTypeId: Joi.number().integer().strict().required(),
        });
        const {error} = schema.validate({
            name, userId, type, code, SubTypename, concept, typeId, subTypeId,
        });

        if (error) {
            throw new Error(error.message);
        }
    }
}