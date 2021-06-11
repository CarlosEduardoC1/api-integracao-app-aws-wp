const express = require('express');
const routes = express.Router();
const controller = require('../controller/logs');

routes.post('/save-archive', controller.save);
routes.get('/get-archive', controller.get);
routes.post('/get-os/:cliente', controller.getOs);
routes.post('/sv/:id', controller.saveID);
routes.post('/updt/:id', controller.updateDataCobranca);
routes.get('/finalizada', controller.getFinalizadas);
routes.delete('/delete-archive/:id', controller.delete);

module.exports = routes;
