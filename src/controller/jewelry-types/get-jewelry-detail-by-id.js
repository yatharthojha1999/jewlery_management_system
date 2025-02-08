module.exports = function makeGetJewelryMetaDetailsAction({
    getJewelryDetails,
}) {
    return async function getJewelryMetaDetailsAction(apiRequestMiddleware) {
        // empty input in get api for all jewelry types.
        const userId = apiRequestMiddleware.headers.userid;
        const jewelyId = apiRequestMiddleware.params.id;
        return await getJewelryDetails({jewelyId, userId});
    }
}
