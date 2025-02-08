const Joi = require('joi');
const {jewelrySubTypesDb, jewelryTypesDb, jewelryDb, jewelryMetaDb, metalPricesDb} = require('../../data-access');
const {checkIsUserAllowedToHaveWriteAccess} = require('../../middleware');

const makeGetJweleryTypes = require('./get-jewelry-types');
const getJweleryTypes = makeGetJweleryTypes({
    Joi,
    jewelryTypesDb,
    checkIsUserAllowedToHaveWriteAccess,
});

const makeGetJwelerySubTypes = require('./get-jewelry-sub-types');
const getJwelerySubTypes = makeGetJwelerySubTypes({
    Joi,
    jewelrySubTypesDb,
    checkIsUserAllowedToHaveWriteAccess,
});

const makeAddJweleryTypeAndSubTypes = require('./add-jewelry-type-and-sub-type');
const addJweleryTypeAndSubTypes = makeAddJweleryTypeAndSubTypes({
    Joi,
    jewelrySubTypesDb,
    checkIsUserAllowedToHaveWriteAccess,
    jewelryTypesDb,
});

const makeUpdateJweleryDetails = require('./update-jewler-details');
const updateJweleryDetails = makeUpdateJweleryDetails({
    Joi,
    jewelrySubTypesDb,
    checkIsUserAllowedToHaveWriteAccess,
    jewelryTypesDb,
});

const makeGetJewelryDetails = require('./get-jewelry-and-meta-details');
const getJewelryDetails = makeGetJewelryDetails({
    Joi,
    jewelrySubTypesDb,
    checkIsUserAllowedToHaveWriteAccess,
    jewelryDb,
    jewelryMetaDb,
});

const makeGetJewelryMataDetailsById = require('./get-meta-and-jewelry-details-by-id');
const getJewelryMataDetailsById = makeGetJewelryMataDetailsById({
    Joi,
    jewelrySubTypesDb,
    checkIsUserAllowedToHaveWriteAccess,
    jewelryDb,
    jewelryMetaDb,
});

const makeGetTypesFromMetaPrices = require('./get-types-from-meta-prices');
const getTypesFromMetaPrices = makeGetTypesFromMetaPrices({
    Joi,
    checkIsUserAllowedToHaveWriteAccess,
    metalPricesDb,
});

const makeCreateJewelryMetaDetails = require('./create-jewel-meta');
const createJewelryMetaDetails = makeCreateJewelryMetaDetails({
    Joi,
    checkIsUserAllowedToHaveWriteAccess,
    jewelryMetaDb,
});

const makeUpdateJewelryMetaDetails = require('./update-jewelry-metadata');
const updateJewelryMetaDetails = makeUpdateJewelryMetaDetails({
    Joi,
    checkIsUserAllowedToHaveWriteAccess,
    jewelryMetaDb,
});

module.exports = {
    getJweleryTypes,
    getJwelerySubTypes,
    addJweleryTypeAndSubTypes,
    updateJweleryDetails,
    getJewelryDetails,
    getJewelryMataDetailsById,
    getTypesFromMetaPrices,
    createJewelryMetaDetails,
    updateJewelryMetaDetails,
}