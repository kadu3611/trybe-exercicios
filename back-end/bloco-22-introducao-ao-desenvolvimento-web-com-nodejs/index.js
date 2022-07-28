const readline = require('readline-sync');
const MeuImc = require('./imc');
const height = readline.questionFloat('What is your height? ');
const weigh = readline.questionFloat('How much do you weigh? ');
MeuImc(height,weigh);