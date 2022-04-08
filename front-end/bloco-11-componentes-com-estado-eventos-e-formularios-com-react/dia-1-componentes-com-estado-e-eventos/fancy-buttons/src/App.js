import logo from './logo.svg';
import React from 'react';
import './App.css';



class App extends React.Component {

  constructor(){
    super()
this.state = {
  numeroDeCliques: 0
}
this.click = this.click.bind(this);
    }
  

click = () => {
this.setState((anterior, _props) => ({
  numeroDeCliques: anterior.numeroDeCliques + 1
}))
   
   }
/*  click2(){
     console.log('fala blaaaaa');
   } */
  render(){
  return (
    <div>
  <button onClick={this.click}>{this.state.numeroDeCliques}</button>
  </div>
  )
}
}

export default App;
