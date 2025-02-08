const TABLE_NAME = 'jewelrySubType';
const DATABASE_NAME = 'jewelry';

function makeJewelrySubTypesDb({mysql}) {
    return Object.freeze({
        getJewelrySubTypes,
        createSubTypes,
        updateJewelryDetails,
    });

    async function getJewelrySubTypes({columnsToGet = ['*']}) {
        const query = `select ${columnsToGet.join(',')} from ${DATABASE_NAME}.${TABLE_NAME}`;
        const [result] = await mysql.execute(
          query,
        );
        return result;
    }

    async function createSubTypes({type, code, name, concept, created_by, createdAt, updatedAt}) {
        const tableColumns = `type, code, name, concept, created_by, createdAt, updatedAt`;
        const values = [
            type, code, name, concept, created_by, createdAt, updatedAt
        ];
        const valuesToBeInserted = `?, ?, ?, ?, ?, ?, ?`;
        const query = `INSERT INTO ${DATABASE_NAME}.${TABLE_NAME} (${tableColumns}) values (${valuesToBeInserted})`;
        const [result] = await mysql.execute(
          query,
          values,
        );
        return result[0];
    }

    async function updateJewelryDetails({type, code, name, concept, updatedAt, subTypeId}) {
        const whereCondition = `id = ?`;
        let setCondition = ``;
        const values = [];
        if (type) {
            setCondition += 'type = ?'
            values.push(type);
        }
        if (setCondition !== '' && code) {
            setCondition += ', code = ?'
            values.push(code);
        } else {
            if (code) {
                setCondition += 'code = ?'
                values.push(code);
            }
        }
        if (setCondition !== '' && name) {
            setCondition += ', name = ?'
            values.push(name);
        } else {
            if (name) {
                setCondition += 'name = ?'
                values.push(name);
            }
        }
        if (setCondition !== '' && concept) {
            setCondition += ', concept = ?'
            values.push(concept);
        } else {
            if (concept) {
                setCondition += 'concept = ?'
                values.push(concept);
            }
        }
        if (setCondition != '') {
            setCondition += ', updatedAt = ?'
        } else {
            setCondition += 'updatedAt = ?'
        }
        values.push(updatedAt, subTypeId);
        const query = `UPDATE ${DATABASE_NAME}.${TABLE_NAME} SET ${setCondition} WHERE ${whereCondition}`;
        const [result] = await mysql.execute(
            query,
            values,
        );
        return result[0];
    }
}

module.exports = makeJewelrySubTypesDb;