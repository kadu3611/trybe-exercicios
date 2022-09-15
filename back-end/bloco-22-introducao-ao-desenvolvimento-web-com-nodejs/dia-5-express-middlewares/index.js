
const express = require('express');
// chamando o express

const bodyParser = require('body-parser');
// Chamando o body-parse

const validantionMidd = require('./middlewares');

const app = express();
// definindo o que de quem o app ira buscar

app.use(bodyParser.json());
// Daqui para baixo todos irão passar pelo body em forma de string por causa do .use

app.post('/sales', validantionMidd, (req, res) => (
    // definindo o a rota /sales
    res.status(201).json({ message: 'Sale created'})
    //  Informando que a porta foi criadanpm com sucesso
));

app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
     
});

