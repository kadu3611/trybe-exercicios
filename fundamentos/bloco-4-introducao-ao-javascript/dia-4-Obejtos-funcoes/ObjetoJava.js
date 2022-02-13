let play ={
    name:'Marta',
    lastName:'Silva',
    age: 34,
    bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018],
    medals:{
        golden:2,
        silver:3
    }
};

console.log('A jogadora '+ play.name +' ' + play.lastName + ' tem ' + play.age + ' anos de idade')

//A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log('A jogadora ' + play.name + ' ' + play.lastName + ' foi eleita a melhor do mundo por ' + play.bestInTheWorld.length + ' vezes')

//A jogadora possui 2 medalhas de ouro e 3 medalhas de prata
let fullName = play.name + ' ' + play.lastName;
console.log('A jogadora ' + fullName + ' possui ' + play.medals.golden + ' medalhas de ouro e ' + play.medals.silver+ ' medalhas de prata')

