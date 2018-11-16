import React from 'react'
import { Link } from 'react-router-dom'
import './App.scss'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item"><Link to='/login'>Login</Link></li>
          <li className="nav-item"><Link to='/'>Home</Link></li>
          <li className="nav-item"><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;