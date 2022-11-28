import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      loading: true,
    };
  }

  fetchFunc = () => {

    fetch('https://api.randomuser.me'
    )
    .then(response => response.json())
    .then(data => {
      this.setState({todos: data.results, loading: false})
    })
    console.log('Cheguei no compnentDidMount'); // teste para verificar se a função estava sendo executada
  }

  componentDidMount(){
    this.fetchFunc();
    console.log('componentDidMount: Bem Vindo!!'); // teste para verficar se executou no local certo
  }
  render(){
    const { todos, loading } = this.state;
   /* console.log(todos.map(elemento => elemento.email) );*/ // Confrimando se a HOF funciona corretamente
  return (
    <div className='App'>
      {
        loading && <div> Loading... </div>
      }
      <div>
        {todos.map((dados, index) => {
          return(
            <div key={index}>
          <div >
              Name:
              {` ${dados.name.title} ${dados.name.first} ${dados.name.last}`}
            </div>
            <div>
                Sexo:
                {` ${dados.gender}`}
              </div>
              <div >
              Localização:
              {` ${dados.location.state} ${dados.location.city} ${dados.location.street.name} ${dados.location.street.number}`}
            </div>
            <div >
              Email:
              {` ${dados.email} `}
            </div>
            <div >
              Login:
              {` ${dados.login.username} `}
              <br></br>
              Password:
              {` ${dados.login.password} `}
            </div>
              </div>
            
            
            )
        })

        }
      </div>

    </div>
  )
}
}

export default App;
