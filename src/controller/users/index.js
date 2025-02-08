const useCases = require('../../usecases');

const makeUserAuthenticationAction = require('./user-authentication');
const userAuthenticationAction = makeUserAuthenticationAction({
    userAuthentication: useCases.usersUsecase.userAuthentication,
});

module.exports = {
    userAuthenticationAction,
}