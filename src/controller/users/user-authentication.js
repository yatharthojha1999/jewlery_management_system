module.exports = function makeUserAuthenticationAction({
    userAuthentication,
}) {
    return async function userAuthenticationAction(apiRequestMiddleware) {
        const email = apiRequestMiddleware.body.email;
        const password = apiRequestMiddleware.body.password;
        return await userAuthentication({
                email,
                password,
            });
    }
}