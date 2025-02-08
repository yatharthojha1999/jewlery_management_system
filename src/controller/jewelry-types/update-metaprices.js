module.exports = function makeUpdateJweleryMataAction({
    updateJewelryMetaDetails,
}) {
    return async function updateweleryMataAction(apiRequestMiddleware) {
        // empty input in get api for all jewelry types.
        const userId = apiRequestMiddleware.headers.userid;
        const image = apiRequestMiddleware.body.image;
        const naturalPrice = apiRequestMiddleware.body.naturalPrice;
        const labPrice = apiRequestMiddleware.body.labPrice;
        const id = apiRequestMiddleware.params.id;
        return await updateJewelryMetaDetails({userId, image, naturalPrice, labPrice, id});
    }
}
