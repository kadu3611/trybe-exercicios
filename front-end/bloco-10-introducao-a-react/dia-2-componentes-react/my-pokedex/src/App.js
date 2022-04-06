import React from "react"; 
import Header from "./Header"; //importado o Header.js com o header
import Pokemons from "./Pokemons"; // Importado o Pokemons.js com a forma como as tag's
import data from "./data"; // importado a data.js com os dados
 
function App() {
  return (
    <main>
      <Header title = "Pokedex" />
      {data.map((value) =>{
        return  <Pokemons pokemon = {value} key = {value.id} />
            })}
          
    </main>
    );
}

export default App; // foi expotado para poder ser pego em outro arquivo
//No App eu determino os dados que irei mandar e nos demais como esse dado serão tratados