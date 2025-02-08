module.exports = function makeUpdateJewelryMetaDetails({
    Joi,
    checkIsUserAllowedToHaveWriteAccess,
    jewelryMetaDb,
}) {
    return async function updateJewelryMetaDetails({
        userId, image, naturalPrice, labPrice, id,
    }) {
        console.info(`updateJewelryMetaDetails usecase called`, {
            userId, image, naturalPrice, labPrice, id
        });

        // validatin userInput
        id = +id;
        validateInput({
            userId, image, naturalPrice, labPrice, id
        });

        // check if user has exist or not. if not throw error.
        const result = await checkIsUserAllowedToHaveWriteAccess({userId, checkForSuperAdmin: true});
        if (result !== '' && typeof result === 'string') {
            return result;
        }
        
        if (typeof result === undefined) {
            return result;
        }

        await jewelryMetaDb.updateJewelryMetaDetails({image, updatedAt: new Date(), naturalPrice, labPrice, id});

        return 'Data updated Successfully';
    }

    function validateInput({
        userId, image, naturalPrice, labPrice, id
    }) {
        const schema = Joi.object({
            userId: Joi.string().uuid().required(),
            image: Joi.array().required(),
            naturalPrice: Joi.number().precision(2).strict().required(),
            labPrice: Joi.number().precision(2).strict().required(),
            id: Joi.number().strict().required(),
        });
        const {error} = schema.validate({
            userId, image, naturalPrice, labPrice, id
        });
        if (error) {
            throw new Error(error.message);
        }
    }
}