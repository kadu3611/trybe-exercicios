
import React from 'react';
import './App.css';


class Teste extends React.Component {

  constructor(){
    super()
this.state = {
  numeroDeCliques: 0
}
this.teste1 = this.teste1.bind(this);
    }
  

teste1 = () => {
this.setState((anterior, _props) => ({
  numeroDeCliques: anterior.numeroDeCliques + 1
}))
   
   }

  render(){
  return (
    <div>
        <select name = 'select'>
            <option value = 'valor1'> Valor 1</option>

        </select>
  
  </div>
  )
}
}

export default Teste;
{/* <button onClick={this.click}>{this.state.numeroDeCliques}</button> */}