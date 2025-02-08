const TABLE_NAME = 'metalPrices';
const DATABASE_NAME = 'jewelry';

function makeMetalPricesDb({mysql}) {
    return Object.freeze({
        getMetalTypes,
    });

    async function getMetalTypes({columnsToGet = ['*']}) {
        const query = `select ${columnsToGet.join(',')} from ${DATABASE_NAME}.${TABLE_NAME}`;
        const [result] = await mysql.execute(
          query,
        );
        return result;
    }
}

module.exports = makeMetalPricesDb;