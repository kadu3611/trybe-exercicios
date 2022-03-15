const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    const resultado = arrays.reduce((acumulador, cada) => {
        const frase = `${acumulador} ${cada}`;
        return frase;
    }
        
  );
   
}

  console.log(flatten());