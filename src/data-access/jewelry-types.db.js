const TABLE_NAME = 'jewelryType';
const DATABASE_NAME = 'jewelry';

function makeJewelryTypesDb({mysql}) {
    return Object.freeze({
        getJewelryTypes,
        createTypes,
        updateJewelryDetails,
    });

    async function getJewelryTypes({columnsToGet = ['*']}) {
        const query = `select ${columnsToGet.join(',')} from ${DATABASE_NAME}.${TABLE_NAME}`;
        const [result] = await mysql.execute(
          query,
        );
        return result;
    }

    async function createTypes({name, created_by, createdAt, updatedAt}) {
        const tableColumns = `name, created_by, createdAt, updatedAt`;
        const values = [
            name, created_by, createdAt, updatedAt
        ];
        const valuesToBeInserted = `?, ?, ?, ?`;
        const query = `INSERT INTO ${DATABASE_NAME}.${TABLE_NAME} (${tableColumns}) values (${valuesToBeInserted})`;
        const [result] = await mysql.execute(
          query,
          values,
        );
        return result[0];
    }

    async function updateJewelryDetails({name, updatedAt, typeId}) {
        const whereCondition = `id = ?`;
        const setCondition = `name = ?, updatedAt = ?`;
        const values = [name, updatedAt, typeId];
        const query = `UPDATE ${DATABASE_NAME}.${TABLE_NAME} SET ${setCondition} WHERE ${whereCondition}`;
        console.log(query);
        console.log(values);
        const [result] = await mysql.execute(
            query,
            values,
        );
        return result[0];
    }
}

module.exports = makeJewelryTypesDb;