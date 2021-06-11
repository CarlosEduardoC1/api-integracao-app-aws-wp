const connect = require('../services/connect');

exports.save = async (req, res, next) => {
    const busca = await connect.post('/financeiro/save-data', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.get = async (req, res, next) => {
    const busca = await connect.get('/financeiro/get-data', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.updateOBS = async (req, res, next) => {
    const busca = await connect.post('/financeiro/upd/' + req.params.id, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.updatePGTO = async (req, res, next) => {
    const busca = await connect.post('/financeiro/pgto/' + req.params.id, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.getWhere = async (req, res, next) => {
    const busca = await connect.post('/financeiro/filter-schedule/' + req.params.filtro, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.delete = async (req, res, next) => {
    const busca = await connect.delete('/financeiro/delete-data/' + req.params.id, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}