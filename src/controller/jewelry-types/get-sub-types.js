module.exports = function makeGetJewlerySubTypesAction({
    getJewlerySubTypes,
}) {
    return async function getJewelrySubTypesAction(apiRequestMiddleware) {
        // empty input in get api for all jewelry sub types.
        const userId = apiRequestMiddleware.headers.userid;
        return await getJewlerySubTypes({userId});
    }
}