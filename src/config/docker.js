const mysqlDatabaseConnection = {
    "username": "root",
    "password": "admin",
    "database": "jewelry",
    "host": "127.0.0.1",
    "dialect": "mysql"
};

const botUserId = 999999;
const JWT_SECRET = 'b73f1a6d89e03e5c6c74c5d2c30b58b82d3e81e7fae2ff6d16ff805b13e5f9b8';

module.exports = {
    mysqlDatabaseConnection,
    botUserId,
    JWT_SECRET
};