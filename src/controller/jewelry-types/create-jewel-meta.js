module.exports = function makeAddJweleryMataAction({
    createJewelryMetaDetails,
}) {
    return async function addJweleryMataAction(apiRequestMiddleware) {
        // empty input in get api for all jewelry types.
        const userId = apiRequestMiddleware.headers.userid;
        const image = apiRequestMiddleware.body.image;
        const naturalPrice = apiRequestMiddleware.body.naturalPrice;
        const labPrice = apiRequestMiddleware.body.labPrice;
        const jewelryId = apiRequestMiddleware.body.jewelryId;
        return await createJewelryMetaDetails({userId, image, naturalPrice, labPrice, jewelryId});
    }
}
