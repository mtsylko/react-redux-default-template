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
  return (
    <Navbar>
      <Nav>
        <LinkWrapper to="/login" label="Login" key={1}/>
        <LinkWrapper to="/" exact label="Home" key={2}/>
        <LinkWrapper to="/about" exact label="About" key={3}/>
      </Nav>
    </Navbar>);
};

export default Header;