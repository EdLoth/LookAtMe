import React from 'react';

import '../Styles/Components/Bottombar.css';

export default function BottomBar() {
  return (
    <div className="NavContainer">
      <nav className="navbar navbar-expand-lg navbar-dark gris scrolling-navbar fixed-top text-center">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navContent">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" id="nameNav" href="#groupButtons">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nameNav" href="#section2">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nameNav" href="#section3">Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nameNav" href="#team">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}