const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

 let clicando1 = document.getElementsByTagName('li')[1];
 clicando1.addEventListener("click", number1)

function number1(){
    let l0 = document.getElementsByTagName('li')[0]
    let l2 = document.getElementsByTagName('li')[2]
    
    clicando1.classList.add('tech');
    
    if(l0.classList.contains('tech')){
    l0.classList.remove('tech');
    }
    else if(l2.classList.contains('tech')){
    l2.classList.remove('tech');
    }

}

let clicando0 = document.getElementsByTagName('li')[0];
 clicando0.addEventListener("click", number0)

function number0(){
    let l1 = document.getElementsByTagName('li')[1]
    let l2 = document.getElementsByTagName('li')[2]
    
    clicando0.classList.add('tech');
    
    if(l1.classList.contains('tech')){
    l1.classList.remove('tech');
    }
    else if(l2.classList.contains('tech')){
    l2.classList.remove('tech');
    }

}
let clicando2 = document.getElementsByTagName('li')[2];
 clicando2.addEventListener("click", number2)

function number2(){
    let l1 = document.getElementsByTagName('li')[1]
    let l0 = document.getElementsByTagName('li')[0]
    
    clicando2.classList.add('tech');
    
    if(l1.classList.contains('tech')){
    l1.classList.remove('tech');
    }
    else if(l0.classList.contains('tech')){
    l0.classList.remove('tech');
    }

}


//03 - Se o elemento tiver a class tech o texto da caixa passara para este elemento
let palavra = document.getElementById('input')
palavra.addEventListener("keyup", escrever)


function escrever() {
    let l1 = document.getElementsByTagName('li')[1]
    let l0 = document.getElementsByTagName('li')[0]
    let l2 = document.getElementsByTagName('li')[2]

    if (l0.classList.contains('tech')){
        l0.innerText = input.value;
    }
    else if(l1.classList.contains('tech')){
        l1.innerText = input.value;
    }
    else if (l2.classList.contains('tech')){
        l2.innerText = input.value;
    }
    
  }

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

let spot = document.getElementsByTagName('h3')[0]
spot.addEventListener("dblclick", port)

function port(t){

    location.href = "https://kadu3611.github.io/";
    target = "_blank"
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

let coro = document.getElementsByTagName('h3')[0]
coro = addEventListener("mouseover", colorir)

function colorir(){
   

    document.getElementsByTagName('h3')[0].style.color = "blue";
        
      
       
}



  
  firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.