module.exports = function makeAddJweleryTypeAndSubTypes({
    Joi,
    checkIsUserAllowedToHaveWriteAccess,
    jewelrySubTypesDb,
    jewelryTypesDb,
}) {
    return async function addJweleryTypeAndSubTypes({
        name, userId, type, code, SubTypename, concept,
    }) {
        console.info(`addJweleryTypeAndSubTypes usecase called`, {
            name, userId, type, code, SubTypename, concept
        });

        // validatin userInput
        validateInput({
            name, userId, type, code, SubTypename, concept
        });

        // check if user has exist or not. if not throw error.
        const result = await checkIsUserAllowedToHaveWriteAccess({userId, checkForSuperAdmin: true});

        if (result !== '' && typeof result === 'string') {
            return result;
        }
        
        if (typeof result === undefined) {
            return result;
        }

        createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
        // add jewelryType.
        await jewelryTypesDb.createTypes({name, created_by: userId, createdAt, updatedAt: createdAt});
        // add jewelrySubTypes.
        try {
            await jewelrySubTypesDb.createSubTypes({type, code, name: SubTypename, concept, created_by: userId, createdAt, updatedAt: createdAt});
        } catch (error) {
            return error.message;
        }
        return 'Data Inserted Successfully!';
    }

    function validateInput({
        name, userId, type, code, SubTypename, concept
    }) {
        const schema = Joi.object({
            userId: Joi.string().uuid().required(),
            name: Joi.string().required(),
            type: Joi.number().integer().strict().required(),
            code: Joi.string().required(),
            SubTypename: Joi.string().required(),
            concept: Joi.string().required(),
        });
        const {error} = schema.validate({
            name, userId, type, code, SubTypename, concept
        });
        if (error) {
            throw new Error(error.message);
        }
    }
}