

const {soma, myRemove} = require ('./sum');

describe('A função soma', () => {
test('Vericando se houve a soma de dois números',() => {
    expect(soma(4,5)).toBe(9);
});
 test('Verifica se o retorno de zero é zero', () => {
     expect(soma(0,0)).toBe(0);
 })
})
describe('A função myRemove', () => {
test('Vericando se removeu um número da array',() => {
     expect(myRemove([1, 2, 3, 4], 3)).toBe([ 1, 2, 4 ]);
});
});



/* Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") */