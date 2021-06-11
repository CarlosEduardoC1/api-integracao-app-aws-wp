const axios = require('axios').default;

const connect = axios.create({ baseURL: `http://18.230.134.55:3080` });

module.exports = connect;