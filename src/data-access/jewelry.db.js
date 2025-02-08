const TABLE_NAME = 'jewelry';
const DATABASE_NAME = 'jewelry';

function makeJewelryDb({mysql}) {
    return Object.freeze({
        getJewelryTypes,
        getJewelryById,
    });

    async function getJewelryTypes({columnsToGet = ['*']}) {
        const query = `select ${columnsToGet.join(',')} from ${DATABASE_NAME}.${TABLE_NAME}`;
        const [result] = await mysql.execute(
          query,
        );
        return result;
    }

    async function getJewelryById({id, columnsToGet = ['*']}) {
        const whereCondition = 'id = ?';
        const values = [id];
        const query = `select ${columnsToGet.join(',')} from ${DATABASE_NAME}.${TABLE_NAME} where ${whereCondition}`;
        const [result] = await mysql.execute(
          query,
          values,
        );
        return result[0];
    }
}

module.exports = makeJewelryDb;