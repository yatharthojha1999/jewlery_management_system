const TABLE_NAME = 'Admin';
const DATABASE_NAME = 'jewelry';

function makeUsersDb({mysql}) {
    return Object.freeze({
        getUserDetailsByEmail,
        getUserDetailsById,
    });

    async function getUserDetailsByEmail({email, password, columnsToGet = ['*']}) {
        const whereCondition = `email = ? and password = ?`;
        const query = `select ${columnsToGet.join(',')} from ${DATABASE_NAME}.${TABLE_NAME} where ${whereCondition}`;
        const values = [email, password];
        console.log({query, values});
        const [result] = await mysql.execute(
          query,
          values,
        );
        return result[0];
    }

    async function getUserDetailsById({userId, columnsToGet = ['*']}) {
        const whereCondition = `id = ?`;
        const query = `select ${columnsToGet.join(',')} from ${DATABASE_NAME}.${TABLE_NAME} where ${whereCondition}`;
        const values = [userId];
        const [result] = await mysql.execute(
          query,
          values,
        );
        return result[0];
    }
}

module.exports = makeUsersDb;