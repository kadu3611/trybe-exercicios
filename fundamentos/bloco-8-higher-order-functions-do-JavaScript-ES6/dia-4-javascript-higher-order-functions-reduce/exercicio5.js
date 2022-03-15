const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    const contar = names.reduce((acumulador, item) =>{
        if(item ==='a'){
        return acumulador +=1;
   /*  return contar; */
        }
    },0);
    return contar
    }
 
  console.log(containsA());