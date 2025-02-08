module.exports = function makeGetJewelryMataDetailsById({
    Joi,
    checkIsUserAllowedToHaveWriteAccess,
    jewelryDb,
    jewelryMetaDb,
}) {
    return async function getJewelryMataDetailsById({
        userId, jewelyId,
    }) {
        console.info(`getJewelryDetailsById usecase called`, {
            userId, jewelyId,
        });

        // validatin userInput
        jewelyId = +jewelyId;
        validateInput({
            userId, jewelyId
        });

        // check if user has exist or not. if not throw error.
        const result = await checkIsUserAllowedToHaveWriteAccess({userId, checkForSuperAdmin: false});
        if (result !== '' && typeof result === 'string') {
            return result;
        }
        
        if (typeof result === undefined) {
            return result;
        }

        // get jewelry details
        let jewelryDetails = await jewelryDb.getJewelryById({id: jewelyId}) ;
        console.log(jewelryDetails.id);

        if (jewelryDetails && Object.keys(jewelryDetails).length) {
            const metaData = await jewelryMetaDb.getJewelryMeta({jewelryId: jewelryDetails.id});
            jewelryDetails.metaData = metaData;
        }

        return jewelryDetails;
    }

    function validateInput({
        userId, jewelyId,
    }) {
        const schema = Joi.object({
            userId: Joi.string().uuid().required(),
            jewelyId: Joi.number().integer().strict().required(),
        });
        const {error} = schema.validate({
            userId, jewelyId
        });
        if (error) {
            throw new Error(error.message);
        }
    }
}