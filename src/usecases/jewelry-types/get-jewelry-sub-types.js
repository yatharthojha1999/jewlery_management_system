module.exports = function makeGetJwelerySubTypes({
    Joi,
    checkIsUserAllowedToHaveWriteAccess,
    jewelrySubTypesDb,
}) {
    return async function getJwelerySubTypes({
        userId,
    }) {
        console.info(`getJwelerySubTypes usecase called`, {
            userId,
        });

        // validatin userInput
        validateInput({
            userId,
        });

        // check if user has exist or not. if not throw error.
        const result = await checkIsUserAllowedToHaveWriteAccess({userId});

        if (result !== '' && typeof result === 'string') {
            return result;
        }
        
        if (typeof result === undefined) {
            return result;
        }

        // get details from jewelrySubTypes.
        return await jewelrySubTypesDb.getJewelrySubTypes({columnsToGet: ['*']});

    }

    function validateInput({
        userId,
    }) {
        const schema = Joi.object({
            userId: Joi.string().uuid().required(),
        });
        const {error} = schema.validate({
            userId,
        });
        if (error) {
            throw new Error(error.message);
        }
    }
}