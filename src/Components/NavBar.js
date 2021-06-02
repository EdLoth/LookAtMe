import React from 'react';

import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import '../Styles/Components/Bottombar.css';

export default function NavBar() {
  return (
    <div className="NavContainer">
      <nav className="navbar navbar-expand-lg navbar-dark gris scrolling-navbar fixed-top text-center">
        <a class="navbar-brand" href="#"><img src={logo} alt="" width="50"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navContent">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" id="nameNav" href="#groupButtons"> Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link" id="nameNav" href="#section2">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Works" className="nav-link" id="nameNav" href="#section3">Works</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" className="nav-link" id="nameNav" href="#team">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}