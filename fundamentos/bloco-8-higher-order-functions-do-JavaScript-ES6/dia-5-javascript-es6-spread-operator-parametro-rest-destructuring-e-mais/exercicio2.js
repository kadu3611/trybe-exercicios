/* const elementos = [5,7,10,25]; */

function somar(...numero){
    let result = 0;
    const resultado = numero.forEach((elemento) => {
    result = result + elemento;
});
return result;
}
console.log(somar(1,2,5,50));