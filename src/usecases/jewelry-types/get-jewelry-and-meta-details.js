module.exports = function makeGetJewelryDetails({
    Joi,
    checkIsUserAllowedToHaveWriteAccess,
    jewelryDb,
    jewelryMetaDb,
}) {
    return async function getJewelryDetails({
        userId,
    }) {
        console.info(`getJewelryDetails usecase called`, {
            userId,
        });

        // validatin userInput
        validateInput({
            userId
        });

        // check if user has exist or not. if not throw error.
        const result = await checkIsUserAllowedToHaveWriteAccess({userId});
        if (result !== '' && typeof result === 'string') {
            return result;
        }
        
        if (typeof result === undefined) {
            return result;
        }

        // get jewelry details
        const jewelryDetails = await jewelryDb.getJewelryTypes({columnsToGet: ['*']});

        if (jewelryDetails && jewelryDetails.length) {
            for (const jewelryDetail of jewelryDetails) {
                const metaData = await jewelryMetaDb.getJewelryMeta({jewelryId: jewelryDetail.id});
                jewelryDetail.metaData = metaData;
            }
            return jewelryDetails;
        }

        return jewelryDetails;
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