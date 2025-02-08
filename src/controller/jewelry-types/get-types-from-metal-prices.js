module.exports = function makeGetTypesFromMetaPricesAction({
    getTypesFromMetaPrices,
}) {
    return async function getTypesFromMetaPricesAction(apiRequestMiddleware) {
        // empty input in get api for all jewelry types.
        const userId = apiRequestMiddleware.headers.userid;
        return await getTypesFromMetaPrices({userId});
    }
}
