const express = require('express');
// const bodyParse = require('body-parser');

const controllersCep = require('./controllers/cep')

const app = express();

const PORT = 3000;

app.get('/ping', controllersCep.okPong ); // terminar de fazer

app.listen(PORT, () => {
    console.log(`Estamos on na porta ${PORT}`)
})