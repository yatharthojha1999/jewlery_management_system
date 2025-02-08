module.exports = function makeGetJweleryTypes({
    Joi,
    checkIsUserAllowedToHaveWriteAccess,
    jewelryTypesDb,
}) {
    return async function getJweleryTypes({
        userId,
    }) {
        console.info(`getJweleryTypes usecase called`, {
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
        return await jewelryTypesDb.getJewelryTypes({columnsToGet: ['*']});

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