const express = require('express');
var cors = require('cors');
const app = express();

const cadastroRouter = require('./src/routes/cadastro');
const logsRouter = require('./src/routes/logs');

app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use('/cadastro', cadastroRouter);
app.use('/log', logsRouter);


app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

