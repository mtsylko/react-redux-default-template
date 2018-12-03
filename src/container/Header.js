import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfileLogo from '../component/profile-logo/ProfileLogo'
import './App.scss'


const LinkWrapper = ({ label, to, key, exact, className } ) => {
  return <li key={key} className={className}>
      <Link to={to} exact={exact}>{label}</Link>
    </li>
};



const ProfileLink = () => {
  return <div className="profile-link">
    <ProfileLogo/>
  </div>
};


const Header = () => {
  const visibleRoutes = [];
  const isAuth = !!localStorage.getItem('token');
  if(isAuth) {
    visibleRoutes.push(
      <LinkWrapper to="/" exact label="Home" key="home"/>,
      <LinkWrapper to="/about" label="About" key="about"/>,
      <LinkWrapper to="/profile" label="Profile" key="profile"/>
    );
  }
  return (<div className="header">
    <ul className="menu-items">
      {isAuth && <ProfileLink/>}
      {visibleRoutes}
      {isAuth && <LinkWrapper to="/logout" label="Logout" key="logout" pullRight className="logout"/>}
    </ul>
  </div>);
};

export default Header;