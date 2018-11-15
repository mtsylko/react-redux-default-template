import React from 'react'
import { Link } from 'react-router-dom'
import './App.scss'

const Header = () => {
  return (
    <div className="header">
      <header>
        <nav className="nav-bar">
          <ul className="nav-list">
            <li className="nav-item"><Link to='/login'>Login</Link></li>
            <li className="nav-item"><Link to='/'>Home</Link></li>
            <li className="nav-item"><Link to='/about'>About</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;