const useCases = require('../../usecases');

const makeGetJewleryTypesAction = require('./get-types');
const getJewelryTypesAction = makeGetJewleryTypesAction({
    getJewelryTypes: useCases.jewelryUsecase.getJweleryTypes,
});

const makeGetJewlerySubTypesAction = require('./get-sub-types');
const getJewlerySubTypesAction = makeGetJewlerySubTypesAction({
    getJewlerySubTypes: useCases.jewelryUsecase.getJwelerySubTypes,
});

const makeAddJweleryTypeAndSubTypesAction = require('./add-jewelry-types-and-sub-types');
const addJweleryTypeAndSubTypesAction = makeAddJweleryTypeAndSubTypesAction({
    addJweleryTypeAndSubTypes: useCases.jewelryUsecase.addJweleryTypeAndSubTypes,
});

const makeUpdateJweleryDetailsAction = require('./update-jewelry-details');
const updateJweleryDetailsAction = makeUpdateJweleryDetailsAction({
    updateJweleryDetails: useCases.jewelryUsecase.updateJweleryDetails,
});

const makeGetJewelryDetailsAction = require('./get-jewelry-details');
const getJewelryDetailsAction = makeGetJewelryDetailsAction({
    getJewelryDetails: useCases.jewelryUsecase.getJewelryDetails,
});

const makeGetJewelryMetaDetailsAction = require('./get-jewelry-detail-by-id');
const getJewelryMetaDetailsAction = makeGetJewelryMetaDetailsAction({
    getJewelryDetails: useCases.jewelryUsecase.getJewelryMataDetailsById,
});

const makeGetTypesFromMetaPricesAction = require('./get-types-from-metal-prices');
const getTypesFromMetaPricesAction = makeGetTypesFromMetaPricesAction({
    getTypesFromMetaPrices: useCases.jewelryUsecase.getTypesFromMetaPrices,
});


const makeAddJweleryMataAction = require('./create-jewel-meta');
const addJweleryMataAction = makeAddJweleryMataAction({
    createJewelryMetaDetails: useCases.jewelryUsecase.createJewelryMetaDetails,
});

const makeUpdateJweleryMataAction = require('./update-metaprices');
const updateweleryMataAction = makeUpdateJweleryMataAction({
    updateJewelryMetaDetails: useCases.jewelryUsecase.updateJewelryMetaDetails,
});

module.exports = {
    getJewelryTypesAction,
    getJewlerySubTypesAction,
    addJweleryTypeAndSubTypesAction,
    updateJweleryDetailsAction,
    getJewelryDetailsAction,
    getJewelryMetaDetailsAction,
    getTypesFromMetaPricesAction,
    addJweleryMataAction,
    updateweleryMataAction,
}