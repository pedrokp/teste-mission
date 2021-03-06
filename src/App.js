import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Router from './Router'

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='/add'>Cadastro de Produtos</NavLink></li>
    <li><NavLink to='/list'>Lista de Produtos</NavLink></li>
    <li><NavLink to='/cart'>Carrinho</NavLink></li>
  </ul>
</nav>

class App extends Component {
  render() {
    return <div className='page-container'>
    <h1>Menu</h1>
      <Navigation />
      <Router />

    </div>
  }
}

export default App;
