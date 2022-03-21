const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

   const toObject = (...a) => a.forEach((elemento) => {
        const [modelo, marca, ano] = elemento;
        console.log(`{modelo: ${modelo}, marca: ${marca}, ano: ${ano}}`);
        });
        
console.log(toObject(palio, chiron));