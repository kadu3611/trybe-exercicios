import React from 'react';
import './App.css';
import Nome from './Nome';
import Email from './Email';
import Cpf from './Cpf';
import Cidade from './Cidade';
import Endereco from './Endereco';
import Estado from './Estado';
import Tipo from './Tipo';

class App extends React.Component {
constructor(){
  super()


  this.state = {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: 'Rio de Janeiro',
    tipo: '',
  }

}

funcEndere = (elemento) => { 
 elemento = elemento.match(/[^\w\s]/gi) ? elemento.replace(/[^\w\s]/gi, '') : this.setState({endereco: elemento});
}


funcao = (event) => {
  let { name, value } = event.target;
  if (name === 'endereco') return value = this.funcEndere(value);
  this.setState({ [name]: event.target.value })
  console.log(event.target.value);


}



  funcOnBlur = event => {
    let { name, value } = event.target;

    if (name === 'cidade') {
      if(value.match(/^\d/)){
       value = this.setState({cidade : ''})
    }
    return value;
  }

  }
   

  render(){
  return (
    <form>
    <fieldset>
    <Nome nome = {this.state.nome} funccion = {this.funcao} />
    <Email email = {this.state.email} funccion = {this.funcao} />
    <Cpf cpf = {this.state.cpf} funccion = {this.funcao} />
    <Endereco funccion = {this.funcao} endereco = {this.state.endereco}/>
    <Cidade cidade = {this.state.cidade} funccion = {this.funcao} onBlur = {this.funcOnBlur}/>
    <Estado estado = {this.state.estado} funccion = {this.funcao}/>
    <Tipo tipo = {this.state.tipo} funccion = {this.funcao} />

      </fieldset>

    </form>
  );
}
}

export default App;
