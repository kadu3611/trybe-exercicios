
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  /* console.log(`${ifScope} o que estou fazendo aqui ? :O`);  */// Se necessário esta linha pode ser removida.
}

testingScope(true);




/* 
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.


const numeros = oddsAndEvens.sort((a, b) => a - b)

console.log(numeros);


 // será necessário alterar essa linha 😉