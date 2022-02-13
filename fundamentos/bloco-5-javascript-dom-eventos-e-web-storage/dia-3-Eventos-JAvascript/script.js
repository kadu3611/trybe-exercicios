
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  //O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days"



//conteudoNovo = document.createTextNode("Olá, cumprimentos!");


  

  
  // Escreva seu código abaixo

function dias(){  
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let uls = document.querySelector('#days')

for(let i=0; i<dezDaysList.length; i+=0){
let dias = dezDaysList[i];
let cada = document.createElement('li');
cada.className = 'day';

if(dias == '24' || dias == '25' || dias == '31'  ){
  cada.className = 'day';
  cada.className = 'holiday';

}

if(dias == '24' || dias == '25' || dias == '31'  ){
  cada.className = 'day';
  cada.className = 'holiday';

}
if(dias == '4' || dias == '11' || dias == '18' || dias == '25' ){
  cada.className = 'day';
  cada.className = 'fryday';
}

cada.innerText = dias;
uls.appendChild(cada);

}
}
dias();

//Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
//Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
