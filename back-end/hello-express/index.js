/* index.js */
const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
    res.json(recipes);
  });
app.get('/recipes/search', function (req, res) {
 const { name } = req.query;
    const filteredRecipes = recipes.filter((r) => r.name.includes(name));
    res.status(200).json(filteredRecipes);
  });

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
});

