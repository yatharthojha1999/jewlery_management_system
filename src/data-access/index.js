const {mysqlDatabaseConnection} = require('../config/docker');
const mysqlPackage = require('mysql2/promise');

const mysqlConnection = mysqlPackage.createPool({
    host: mysqlDatabaseConnection.host,
    user: mysqlDatabaseConnection.username,
    password: mysqlDatabaseConnection.password,
    database: mysqlDatabaseConnection.database,
});

const makeUsersDb = require('./users.db');
const usersDb = makeUsersDb({mysql: mysqlConnection});

const makeJewelryTypesDb = require('./jewelry-types.db');
const jewelryTypesDb = makeJewelryTypesDb({mysql: mysqlConnection});

const makeJewelrySubTypesDb = require('./jewelry-sub-types.db');
const jewelrySubTypesDb = makeJewelrySubTypesDb({mysql: mysqlConnection});

const makeJewelryMetaDb = require('./jewelry-metadata.db');
const jewelryMetaDb = makeJewelryMetaDb({mysql: mysqlConnection});

const makeJewelryDb = require('./jewelry.db');
const jewelryDb = makeJewelryDb({mysql: mysqlConnection});

const makeMetalPricesDb = require('./metal-prices.db');
const metalPricesDb = makeMetalPricesDb({mysql: mysqlConnection});

module.exports = {
    usersDb,
    jewelryTypesDb,
    jewelryMetaDb,
    jewelrySubTypesDb,
    jewelryDb,
    metalPricesDb,
};