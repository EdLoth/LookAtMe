import React from 'react';

import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import '../Styles/Components/Bottombar.css';

export default function NavBar() {
  return (
    <div className="NavContainer">
      <nav className="navbar navbar-expand-lg navbar-dark gris scrolling-navbar fixed-top text-center">
        <NavLink class="navbar-brand" to="/"><img src={logo} alt="Vogar" width="70"/></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navContent">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" id="nameNav"> Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link" id="nameNav" href="#section2">Sobre</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" className="nav-link" id="nameNav" href="#team">Contato</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}