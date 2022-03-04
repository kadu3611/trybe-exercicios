
const botao = document.querySelector('.button')
let count = 0;

botao.addEventListener('click',()=> {
    const quantidade = document.querySelector('.number');
   
    quantidade.innerHTML = count += 1; 
    /* quantidade.innerHTML = quantidade.value + 1; <= Isso não funciona porque estou querendo
    que uma classe funcine como variavel. O que na prática não funciona*/
})