
const fs = require('fs').promises;

async function newArray(){ 

const fileRead = await fs.readFile('./simpsons.json', 'utf-8');
const stringSimpsons = JSON.parse(fileRead);
const newArraySimpsons = stringSimpsons.filter(element => Number(element.id) !== 10 && 
Number(element.id) !== 6);
console.log(newArraySimpsons);
await fs.writeFile('./simpsons.json', JSON.stringify(newArraySimpsons));
}

async function main(){

const logReadFile = await newArray();
console.log(logReadFile);

}

main();