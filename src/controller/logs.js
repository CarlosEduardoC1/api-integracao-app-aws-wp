const connect = require('../services/connect');

exports.save = async (req, res, next) => {
    const busca = await connect.post('/log/save-archive', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.get = async (req, res, next) => {
    const busca = await connect.get('/log/save-archive', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.getOs = async (req, res, next) => {
    const busca = await connect.post('/log/get-os/' + req.params.cliente, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.saveID = async (req, res, next) => {
    const busca = await connect.post('/log/sv/' + req.params.id, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.updateDataCobranca = async (req, res, next) => {
    const busca = await connect.post('/log/updt/' + req.params.id, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.getFinalizadas = async (req, res, next) => {
    const busca = await connect.get('/log/finalizada', req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.delete = async (req, res, next) => {
    const busca = await connect.delete('/log/delete-archive/' + req.params.id, req.body, { headers: req.headers })
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}