import React, { Component } from "react"; // importado para que possa fazer a desestruturação
import "./Header.css"; // importado o css


class Pokemons extends Component {// Somente o Component
    render(){
        
        const { pokemon } = this.props; //this.props é o que veio do App.js, que nosso caso foi o 'pokemon'
    return(
    <section className="seccao">
        <div className="poke">
        <ul> {pokemon.name}</ul>
         <ul>{pokemon.type} </ul>
            <ul>{pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit} </ul>
             <img src = {pokemon.image} alt="Imagem do Pokemon"/>
            
             </div>
    </section>
)
}
}

export default Pokemons // exportado para ser pego em outro arquivo

// Aqui foi recebido os dados do App.js e colocados de forma que satisfaça o requisito

