const { expect } = require("chai");

const functionNumberState = require('./function');

describe('Teste', () => {
    describe('caso seja positivo', () => {
            it('É positivo', () =>{
            const resposta = functionNumberState(1);
            expect(resposta).to.be.equals('positivo');
            });
        });
        describe('Caso não seja número', () => {
            it('Não é número',() => {
                const resposta = functionNumberState('asdsadasd');

                expect(resposta).to.be.equals('o valor deve ser um número');
            });
        });
});