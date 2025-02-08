module.exports = function makeAddJweleryTypeAndSubTypesAction({
    addJweleryTypeAndSubTypes,
}) {
    return async function addJweleryTypeAndSubTypesAction(apiRequestMiddleware) {
        // empty input in get api for all jewelry types.
        const userId = apiRequestMiddleware.headers.userid;
        const name = apiRequestMiddleware.body.name;
        const type = apiRequestMiddleware.body.type;
        const code = apiRequestMiddleware.body.code;
        const SubTypename = apiRequestMiddleware.body.SubTypename;
        const concept = apiRequestMiddleware.body.concept;
        return await addJweleryTypeAndSubTypes({name, userId, type, code, SubTypename, concept});
    }
}
