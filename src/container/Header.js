import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import './App.scss'

const LinkWrapper = ({ label, to, key, exact } ) => {
  return <LinkContainer to={to} exact={exact}>
    <NavItem eventKey={key} href="#">
      {label}
    </NavItem>
  </LinkContainer>
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
  return (
    <Navbar>
      <Nav>
        {visibleRoutes}
      </Nav>
      {isAuth && <Nav pullRight>
        <LinkWrapper to="/logout" label="Logout" key="logout" pullRight/>
      </Nav>}
    </Navbar>);
};

export default Header;