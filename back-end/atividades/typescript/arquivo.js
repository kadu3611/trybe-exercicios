"use strict";
let num = 1;
var numberDays;
(function (numberDays) {
    numberDays[numberDays["Domingo"] = 1] = "Domingo";
    numberDays[numberDays["Segunda"] = 2] = "Segunda";
    numberDays[numberDays["Ter\u00E7a"] = 3] = "Ter\u00E7a";
    numberDays[numberDays["Quarta"] = 4] = "Quarta";
})(numberDays || (numberDays = {}));
const primeiroDiaDaSemana = numberDays[1];
console.log(primeiroDiaDaSemana);
