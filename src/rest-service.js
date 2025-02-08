const router = require('express').Router();
const controller = require('./controller');
const middleWare = require('./middleware/apiRequests');


function init() {
    initUserRoutes();
    initJewelryTypesRoute();
}

function initUserRoutes() {
    // check your login.
    router.post('/api/auth/login', middleWare({
        controller: controller.userController.userAuthenticationAction,
    }));
}

function initJewelryTypesRoute() {
    // check your login.
    router.get('/api/jewelry/types', middleWare({
        controller: controller.jewelryController.getJewelryTypesAction,
    }));
    router.get('/api/jewelry/subtypes', middleWare({
        controller: controller.jewelryController.getJewlerySubTypesAction,
    }));
    router.post('/api/jewelry', middleWare({
        controller: controller.jewelryController.addJweleryTypeAndSubTypesAction,
    }));
    router.put('/api/jewelry/:id', middleWare({
        controller: controller.jewelryController.updateJweleryDetailsAction,
    }));
    router.get('/api/jewelry', middleWare({
        controller: controller.jewelryController.getJewelryDetailsAction,
    }));
    router.get('/api/jewelry/:id', middleWare({
        controller: controller.jewelryController.getJewelryMetaDetailsAction,
    }));
    router.get('/api/metal-types', middleWare({
        controller: controller.jewelryController.getTypesFromMetaPricesAction,
    }));
    router.post('/api/metadata', middleWare({
        controller: controller.jewelryController.addJweleryMataAction,
    }));
    router.put('/api/metadata/:id', middleWare({
        controller: controller.jewelryController.updateweleryMataAction,
    }));
}

init();
module.exports = router;