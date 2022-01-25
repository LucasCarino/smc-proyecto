import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import Equipo from './components/Equipo/Equipo';
import Servicios from './components/Servicios/Servicios';
import Portfolio from './components/Portfolio/Portfolio';
import Clientes from './components/Clientes/Clientes';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';

import NavBar from './components/NavBar/NavBar';
import SocialBar from './components/SocialBar/SocialBar';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <SocialBar />
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
      </BrowserRouter>
    )
  }
}

export default App;
