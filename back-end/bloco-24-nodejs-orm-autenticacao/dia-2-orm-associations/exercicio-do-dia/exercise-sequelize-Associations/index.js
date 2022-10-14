const bodyParser = require('body-parser');

const express = require('express');

const { getAllPatientsPlans, getAllPatientsSurgeries } = require ('./controllers/patientsController');
const { getAllPlan } = require ('./controllers/plansController');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); // Buscar saber 

app.get('/all', getAllPatientsPlans);
app.get('/sugeries', getAllPatientsSurgeries);
app.get('/:id', getAllPlan);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});