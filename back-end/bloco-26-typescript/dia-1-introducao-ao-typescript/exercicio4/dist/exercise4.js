"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const numMonth = {
    Primeiro: 1,
    Segundo: 2,
    Terceiro: 3,
    Quarto: 4,
    Quinto: 5,
};
const month = {
    Janeiro: numMonth.Primeiro,
    Fevereiro: numMonth.Segundo,
    Março: numMonth.Terceiro,
    Abril: numMonth.Quarto,
    Maio: numMonth.Quinto,
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(numMonth), "Escolha um número");
if (Object.values(numMonth).includes(choiceHemisphere + 1))
    console.
        log(`Esse número corresponde ao mês de ${Object.keys(month)[choiceHemisphere]}`);
