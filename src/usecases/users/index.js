const Joi = require('joi');
const jwt = require('jsonwebtoken');
const {usersDb} = require('../../data-access');
const {JWT_SECRET} = require('../../config/docker');

const makeGenerateJwtToken = require('./generate-jwt-token');
const generateJwtToken = makeGenerateJwtToken({
    Joi,
    jwt,
    JWT_SECRET,
});

const makeUserAuthentication = require('./user-authentication');
const userAuthentication = makeUserAuthentication({
    Joi,
    usersDb,
    generateJwtToken,
});

module.exports = {
    userAuthentication,
}