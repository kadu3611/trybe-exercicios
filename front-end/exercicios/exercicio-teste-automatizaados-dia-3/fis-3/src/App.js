import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Inicio from './Inicio';
import About from './About';
import Projetos from './Projetos';
import Contato from './Contato';
import NoMatch from './NoMatch';

export default function App() {
  return (
    <div>
      <Link to="/">Início</Link>
      <br />
      <Link to="/Contato">Contato</Link>
      <br />
      <Link to="/Projetos">Projetos</Link>
      <br />
      <Link to="/Sobremim">Sobremim</Link>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/Contato" component={Contato} />
        <Route path="/Projetos" component={ Projetos } />
        <Route path="/about" component={ About } />
        <Route component={ NoMatch } />
      </Switch>
    </div>
  );
};
