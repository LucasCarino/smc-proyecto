import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Portfolio from './components/Portfolio';
import Clientes from './components/Clientes';
import Equipo from './components/Equipo';
import Contacto from './components/Contacto';

import NavBar from './components/NavBar/NavBar';
import SocialBar from './components/SocialBar/SocialBar';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <SocialBar />
        <div className='container'>
        <NavBar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Nosotros />} path='/nosotros' />
          <Route element={<Servicios />} path='/servicios' />
          <Route element={<Portfolio />} path='/portfolio' />
          <Route element={<Clientes />} path='/clientes' />
          <Route element={<Equipo />} path='/equipo' />
          <Route element={<Contacto />} path='/contacto' />
        </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
