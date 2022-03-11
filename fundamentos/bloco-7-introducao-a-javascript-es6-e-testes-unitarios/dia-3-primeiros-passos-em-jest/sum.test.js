

const {soma, myRemove, myFizzBuzz, encode, decode} = require ('./sum');

describe('A função soma', () => {
test('Verificando se houve a soma de dois números',() => {
    expect(soma(4,5)).toBe(9);
});
 test('Verifica se o retorno de zero é zero', () => {
     expect(soma(0,0)).toBe(0);
 })
})
describe('A função myRemove', () => {
test('Verificando se removeu um número da array',() => {
     expect(myRemove([1, 2, 3, 4], 5)).toEqual([ 1, 2, 3, 4]);
});

describe('A função myFizzBuzz -fizzbuzz- ', () => {
    test('Verificando se é fizzbuzz',() => {
         expect(myFizzBuzz(15)).toEqual('fizzbuzz');});

});

describe('A função myFizzBuzz -fizz-', () => {
    test('Verificando se é fizz',() => {
         expect(myFizzBuzz(6)).toEqual('fizz');});

});

describe('A função myFizzBuzz -buzz-', () => {
    test('Verificando se é buzz',() => {
         expect(myFizzBuzz(5)).toEqual('buzz');});

});
describe('A função myFizzBuz. Não divisivel por 3 nem por 5', () => {
    test('Verificando se aparece o número não divisivel',() => {
         expect(myFizzBuzz(2)).toBe(2);});

});

describe('A função myFizzBuzz. Testando com letra', () => {
    test('Verificando se é falso',() => {
         expect(myFizzBuzz('a')).toEqual(false);});

});

describe('A função encode', () => {
    test('Verificando encode',() => {
         expect(typeof encode).toEqual('function')
        });

});
describe('A função encode funciona', () => {
    test('Verificando encode funcina corretamente',() => {
         expect(encode('a')).toEqual(["1"]);});
});

describe('A função decode', () => {
    test('Verificando decode',() => {
         expect(typeof decode).toEqual('function')
        });

});
});





/* Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") */