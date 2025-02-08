module.exports = function makeCheckIsUserAllowedToHaveWriteAccess({
    usersDb,
}) {
    return async function checkIsUserAllowedToHaveWriteAccess({userId, checkForSuperAdmin = false}) {
        console.log('checkIsAdmin usecase called', {userId});
        const isUserExist = await usersDb.getUserDetailsById({
            userId, columnsToGet: ['id', 'is_super'],
        });

        if (!isUserExist) {
            return 'User not found, please signup!';
        }

        if (checkForSuperAdmin && !isUserExist.is_super) {
            return 'You do not have the rights to create/update jewelry. Please contact you administrator for more details!';
        }
    }
}