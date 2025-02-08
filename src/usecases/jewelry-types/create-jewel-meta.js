module.exports = function makeCreateJewelryMetaDetails({
    Joi,
    checkIsUserAllowedToHaveWriteAccess,
    jewelryMetaDb,
}) {
    return async function createJewelryMetaDetails({
        userId, image, naturalPrice, labPrice, jewelryId
    }) {
        console.info(`createJewelryMetaDetails usecase called`, {
            userId, image, naturalPrice, labPrice, jewelryId
        });

        // validatin userInput
        validateInput({
            userId, image, naturalPrice, labPrice, jewelryId
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
        await jewelryMetaDb.createJewelMeta({jewelryId, image, naturalPrice, labPrice, created_by: userId, createdAt, updatedAt: createdAt});

        return 'Data inserted Successfully';
    }

    function validateInput({
        userId, image, naturalPrice, labPrice, jewelryId,
    }) {
        const schema = Joi.object({
            userId: Joi.string().uuid().required(),
            image: Joi.array().required(),
            naturalPrice: Joi.number().precision(2).strict().required(),
            labPrice: Joi.number().precision(2).strict().required(),
            jewelryId: Joi.number().strict().required(),
        });
        const {error} = schema.validate({
            userId, image, naturalPrice, labPrice, jewelryId,
        });
        if (error) {
            throw new Error(error.message);
        }
    }
}