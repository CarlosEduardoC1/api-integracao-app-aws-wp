const connect = require('../services/connect');

exports.salva = async (req, res, next) => {
    await connect.post('/cadastro/save-data', req.body,)
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.get = async (req, res, next) => {
    await connect.get('/cadastro/get-data', req.body,)
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.update = async (req, res, next) => {
    await connect.post('/cadastro/time/update-data/' + req.params.id, req.body,)
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}

exports.deleta = async (req, res, next) => {
    await connect.delete('/cadastro/delete-data/' + req.params.id,)
        .then(response => { return res.status(200).json(response.data); })
        .catch(error => { return res.status(400).json(error) });
}
