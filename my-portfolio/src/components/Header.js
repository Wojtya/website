import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import './header.css'; // Assuming you'll create a CSS file for styling

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Escriva's Portfolio!</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="/">home</a></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
