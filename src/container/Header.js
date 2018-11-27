import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom'
import ProfileLogo from '../component/profile-logo/ProfileLogo'
import './App.scss'

const LinkWrapper = ({ label, to, key, exact, className } ) => {
  return <LinkContainer to={to} exact={exact}>
    <NavItem eventKey={key} href="#" className={className}>
      {label}
    </NavItem>
  </LinkContainer>
};


const ProfileLink = () => {
  return <div className="profile-link">
    <Navbar.Header>
      <Navbar.Brand>
        <ProfileLogo/>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
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
    <Navbar>
      <Nav>
        {isAuth && <ProfileLink/>}
      </Nav>
      <Nav>
        {visibleRoutes}
      </Nav>
      {isAuth && <Nav pullRight>
        <LinkWrapper to="/logout" label="Logout" key="logout" pullRight className="logout"/>
      </Nav>}
    </Navbar>
  </div>);
};

export default Header;