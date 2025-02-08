module.exports = function makeGetTypesFromMetaPrices({
    Joi,
    checkIsUserAllowedToHaveWriteAccess,
    metalPricesDb,
}) {
    return async function getTypesFromMetaPrices({
        userId,
    }) {
        console.info(`getTypesFromMetaPrices usecase called`, {
            userId,
        });

        // validatin userInput
        validateInput({
            userId,
        });

        // check if user has exist or not. if not throw error.
        const result = await checkIsUserAllowedToHaveWriteAccess({userId, checkForSuperAdmin: false});
        if (result !== '' && typeof result === 'string') {
            return result;
        }
        
        if (typeof result === undefined) {
            return result;
        }

        // get details from jewelrySubTypes.
        return await metalPricesDb.getMetalTypes({columnsToGet: ['type']});

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