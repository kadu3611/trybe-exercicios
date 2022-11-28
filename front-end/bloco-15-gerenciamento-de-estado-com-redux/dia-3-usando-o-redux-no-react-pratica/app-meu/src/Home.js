import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
  return (
    <div>
      Aqui tem Home 

      <Link to='/login'>
      Clica para Login
      </Link>

    </div>
  );
}
}
export default Home;