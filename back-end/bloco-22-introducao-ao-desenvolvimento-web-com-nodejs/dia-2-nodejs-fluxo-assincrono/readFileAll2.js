
const fs = require('fs').promises;

async function readFileID(id){

const fileRead = await fs.readFile('./simpsons.json', 'utf-8');
const simpsonsId = JSON.parse(fileRead);
const readSimpsons = simpsonsId.find(element => Number(element.id) === id);
if(!readSimpsons){
    throw new Error('id não encontrado');
}
return(` ${readSimpsons.id} - ${readSimpsons.name} `);
}

async function  main(){

const logReadFile = await readFileID(10);
console.log(logReadFile);

}

main();