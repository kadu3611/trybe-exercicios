// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abc', 'def', 'ghi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['cccc', 'bbbb', 'dddd'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
   
};

console.log(fruitSalad(specialFruit, additionalItens));