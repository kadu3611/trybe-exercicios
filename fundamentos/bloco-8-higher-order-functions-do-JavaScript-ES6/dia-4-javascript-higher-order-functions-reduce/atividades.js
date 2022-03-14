const numbers = [50, 85, -30, 3, 15];

const getBigger = numbers.reduce((bigger, number) => ((bigger > number) ? bigger : number));

/* const bigger = numbers.reduce(getBigger, 0); */
console.log(getBigger); // 85

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaPar = numbers.filter((numero) => numero % 2 === 0).reduce((acumulador, numero) => acumulador + numero);
console.log(somaPar);

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaPar = numbers.reduce((acumulador, numero) => (numero % 2 === 0) ? acumulador + numero:acumulador);
console.log(somaPar);