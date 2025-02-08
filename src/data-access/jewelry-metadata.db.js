const TABLE_NAME = 'jewelryMetaData';
const DATABASE_NAME = 'jewelry';

function makeJewelryMetaDb({mysql}) {
    return Object.freeze({
        getJewelryMeta,
        createJewelMeta,
        updateJewelryMetaDetails,
    });

    async function getJewelryMeta({jewelryId, columnsToGet = ['*']}) {
        const whereCondition = 'jewelry_id = ?';
        const values = [jewelryId];
        const query = `select ${columnsToGet.join(',')} from ${DATABASE_NAME}.${TABLE_NAME} where ${whereCondition}`;
        const [result] = await mysql.execute(
          query,
          values,
        );
        return result;
    }

    async function createJewelMeta({jewelryId, image, naturalPrice, labPrice, created_by, createdAt, updatedAt}) {
        const tableColumns = `jewelry_id, image, natural_price, lab_price, createdAt, updatedAt`;
        const imageJson = JSON.stringify(image);
        const values = [
            jewelryId, imageJson, naturalPrice, labPrice, createdAt, updatedAt
        ];
        const valuesToBeInserted = `?, ?, ?, ?, ?, ?`;
        const query = `INSERT INTO ${DATABASE_NAME}.${TABLE_NAME} (${tableColumns}) values (${valuesToBeInserted})`;
        const [result] = await mysql.execute(
          query,
          values,
        );
        return result[0];
    }

    async function updateJewelryMetaDetails({image, updatedAt, naturalPrice, labPrice, id}) {
        const whereCondition = `id = ?`;
        let setCondition = ``;
        const values = [];
        if (image && image.length) {
            setCondition += `image = ?`;
            values.push(image);
        }
        if (naturalPrice && setCondition != '') {
            setCondition += `, natural_price = ?`;
            values.push(naturalPrice);
        } else {
            if (naturalPrice) {
                setCondition += `natural_price = ?`;
                values.push(naturalPrice);
            }
        }
        if (labPrice && setCondition != '') {
            setCondition += `, lab_price = ?`;
            values.push(labPrice);
        } else {
            if (labPrice) {
                setCondition += `lab_price = ?`;
                values.push(labPrice);
            }
        }
        if (setCondition != '') {
            setCondition += `, updatedAt = ?`;
        } else {
            setCondition += `updatedAt = ?`;
        }
        values.push(updatedAt, id);
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

module.exports = makeJewelryMetaDb;