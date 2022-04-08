import React from "react"; 
import Header from "./Header"; //importado o Header.js com o header
import Pokemons from "./Pokemons"; // Importado o Pokemons.js com a forma como as tag's
import data from "./data"; // importado a data.js com os dados
import './Header.css'
 
class App extends React.Component {
  
constructor(){
  super()
  this.state = {
    numero: 0
  }
  this.buscando = this.buscando.bind(this);
  }
  buscando = () =>{
    if(data.length -1 === this.state.numero){
      this.setState({
        numero: 0
      })
    }
    else{
    this.setState((anterior, _nada) =>({
      numero: anterior.numero + 1,

    }))
}
  }
render(){

  return (
    <main>
      <Header title = "Pokedex" />
       <Pokemons pokemon = {data[this.state.numero]} key = {data[this.state.numero].id} />
                    <button onClick={ this.buscando }> Próximo </button>
          
    </main>
    );
}
}

export default App; // foi expotado para poder ser pego em outro arquivo
//No App eu determino os dados que irei mandar e nos demais como esse dado serão tratados
/* {data.map((value) =>{ */