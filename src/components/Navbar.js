import React from 'react';
import logo from '../images/logo.png';
// REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//************************* NAVBAR ***************************/
const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
          <a className="navbar-brand" href="#"> <img className="navbar-logo" src={logo} alt="Navbar-logo.." /> </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#0a0909" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">You</a>
              <a className="dropdown-item" href="#">Should</a>
              <a className="dropdown-item" href="#">Hire</a>
              <a className="dropdown-item" href="#">Amar Redzepagic</a>
            <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Trust me, I'm a program</a>
            </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>    
          </div>
          </div>
        </nav>
      </div>
    )
};

export default Navbar
