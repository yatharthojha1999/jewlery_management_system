module.exports = function makeUpdateJweleryDetailsAction({
    updateJweleryDetails,
}) {
    return async function updateJweleryDetailsAction(apiRequestMiddleware) {
        // empty input in get api for all jewelry types.
        const userId = apiRequestMiddleware.headers.userid;
        const name = apiRequestMiddleware.body.name;
        const type = apiRequestMiddleware.body.type;
        const code = apiRequestMiddleware.body.code;
        const SubTypename = apiRequestMiddleware.body.SubTypename;
        const concept = apiRequestMiddleware.body.concept;
        const typeId = apiRequestMiddleware.params.id; 
        const subTypeId = apiRequestMiddleware.body.subTypeId;
        return await updateJweleryDetails({name, userId, type, code, SubTypename, concept, typeId, subTypeId});
    }
}
