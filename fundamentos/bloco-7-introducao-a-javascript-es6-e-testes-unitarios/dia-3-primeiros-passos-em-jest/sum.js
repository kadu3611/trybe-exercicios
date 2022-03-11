function soma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }


  function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
 /*  console.log(myRemove([1, 2, 3, 4], 5))
 */

 function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
/* console.log(myFizzBuzz('a')) */

function encode(vogal){
  let resultado =[];
  let vogais = vogal.split(', ');
  for(let i=0; i<vogal.length; i+=1){
    if (vogais[i] === 'a'){
      resultado.push('1');
      }
    else if (vogais[i] === 'e'){
      resultado.push('2');
      }
    else if (vogais[i] === 'i'){
        resultado.push('3');
      }
    else if (vogais[i] === 'o'){
      resultado.push('4');
      }
    else if (vogais[i] === 'u'){
      resultado.push('5');
      }
    }
 return resultado;
}
/* console.log(encode('a, e, i, o, u')) */
/* a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5 */
function decode(){

}

module.exports = {soma, myRemove, myFizzBuzz, encode, decode}