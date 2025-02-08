const {usersDb} = require('../data-access');

const makeCheckIsUserAllowedToHaveWriteAccess = require('./is-user-super-admin');
const checkIsUserAllowedToHaveWriteAccess = makeCheckIsUserAllowedToHaveWriteAccess({
    usersDb,
});

module.exports = {
    checkIsUserAllowedToHaveWriteAccess,
}