import React from "react";

class Counter extends React.Component {
    constructor(props) { // primeiro
      super(props);
      this.state = {
        counter: 0
      };
      console.log("construtor");
    }
  //https://dog.ceo/api/breeds/image/random
  async fetchDog(){
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
    })
  }


    componentDidMount() { // Depois dos render // terceiro
      console.log("componentDidMount");
    }
   shouldComponentUpdate() { 
    console.log("shouldComponentUpdate State", this.state);
    console.log("shouldComponentUpdate Props");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate PrevState", this.state, prevState);
    console.log("componentDidUpdate prevProps", this.state, prevProps);
  }
    /* shouldComponentUpdate(nextProps, nextState) { // Quando eu clico e atualizo o número
      console.log("shouldComponentUpdate");       // Ao inves de vir o constructor vem o shouldComponent
      return true;
    }
  
    componentDidUpdate(prevProps, prevState) { // Render, shouldComponentUpdate e depois esse
      console.log("componentDidUpdate");       // logo após ser clicado em atualizar o componente
    } */
  
    render() { // segundo
      console.log("render");
      return (
        <div>
          <p>Contador</p>
          <button
            onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
          >
            Soma
          </button>
          <p>{this.state.counter}</p>
        </div>
      );
    }
  }
  export default Counter;