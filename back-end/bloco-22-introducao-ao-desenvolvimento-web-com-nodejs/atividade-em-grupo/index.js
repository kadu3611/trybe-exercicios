const express = require('express');

const {userName, loginTest} = require('./middlwares');
const generateToken = require('./token');

const app = express();

app.use(express.json());

app.post('/user/register', userName, (req, res) => {
    res.status(201).json({ "message": "user created" });

});

app.post('/user/login', loginTest, generateToken, (req, res) => {
    const token = req.token;
    // req.token = token;
    res.status(201).json({ token });

});


app.listen('3001', () => console.log('Tudo certo'));

