
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavbarBrand, NavbarHeader, Nav, NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap';

export default class AppNavBar extends Component {

  render() {
    return (<Navbar className="navbar-custom" fixedTop={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <Image src="../../public/img/logo.png"></Image>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>);
  }
}
