module.exports = function makeGetJewleryTypesAction({
    getJewelryTypes,
}) {
    return async function getJewelryTypesAction(apiRequestMiddleware) {
        // empty input in get api for all jewelry types.
        console.log(apiRequestMiddleware);
        const userId = apiRequestMiddleware.headers.userid;
        return await getJewelryTypes({userId});
    }
}
