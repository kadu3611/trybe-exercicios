/* const fs = require('fs').promises;


  function readAll(){
    fs.readFile('./simpsons.json', 'utf-8')
        .then((fileContent) => {
            const simpsons = JSON.parse(fileContent);
            const string = simpsons.map(({id, name}) => `${id} - ${name}`);
            string.forEach(element => {
                console.log(element);
            });
        })
  } 

function main(){
    readAll();
}
main(); */

// Fazendo com await


// Faz a requisição com promises 
const fs = require('fs').promises;

// função async do readAllAsync
async function readAllAsync() {
    // Peço a leitura com o readFile do arquivo simpsons.json, com o tipo de arquivo 'utf-8'
    // de forma assicrona com o await
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    //  Agora transforma em string o arquivo lido o fileContent
    const simpsons = JSON.parse(fileContent);
    // Agora const recebe um array com a template literals com o id e o nome de cada elemento
    // atravez de um map
    const strings = simpsons.map(({id, name}) => `${id} - ${name}`);
    // Por meio de um forEach imprimimos cada arquivo no log
    strings.forEach(element => {
        console.log(element);
    });
}
// chamamos a função para que seja executada
readAllAsync();

