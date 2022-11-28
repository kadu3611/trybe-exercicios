import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Home from './Home';
import store from './components/redux/store/store';
import Login from './pages/Login';
import Clientes from './pages/Clientes';

class App extends Component {
  render() {
    return (
      <Switch>
      <Provider store={ store }>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/clientes" component={ Clientes } />
      </Provider>
    </Switch>

  );
  }
}

export default App;
{/* <Route path="/professionalform" component={ ProfessionalForm } />
<Route path="/formdisplay" component={ FormDataDisplay } /> */}