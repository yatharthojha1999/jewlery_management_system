module.exports = function makeGetJewelryDetailsAction({
    getJewelryDetails,
}) {
    return async function getJewelryDetailsAction(apiRequestMiddleware) {
        // empty input in get api for all jewelry types.
        const userId = apiRequestMiddleware.headers.userid;
        return await getJewelryDetails({userId});
    }
}
