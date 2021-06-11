const express = require('express');
const routes = express.Router();
const controller = require('../controller/cadastro');

routes.post('/save-data', controller.salva);
routes.get('/get-data', controller.get);
routes.post('/time/update-data/:id', controller.update);
routes.delete('/delete-data/:id', controller.deleta);

module.exports = routes;
