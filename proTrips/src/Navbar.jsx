// Navbar.jsx

import React from 'react';
import "./App.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
        <h1><Link to="/">Kalvium💖</Link></h1>
      <ul>
        <li>
          <Link to="/contact">Contacts</Link>
        </li>
        <li>
          <Link to="/form">Registration Form</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
