import React from 'react';
import { Container, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import CartWidget from '../Icon-Comp/CartWidget';
import {Link,NavLink } from 'react-router-dom';

import "./NavBar.css"
const NavBar = () => {
  return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>

      <Navbar.Brand>
        <NavLink to="/">Ecommerce-HuancaPereyra</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Categorias" id="collasible-nav-dropdown" >
            <NavDropdown.Item ><NavLink to="category/MOUNTAIN BIKE">MOUNTAIN BIKE  </NavLink></NavDropdown.Item>
            <NavDropdown.Item ><NavLink to="category/FIXEI">FIXIE</NavLink></NavDropdown.Item>
            <NavDropdown.Item ><NavLink to="category/Gravel">GRAVEL</NavLink></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeClass" : undefined
                  }
                  to="/"
                >Ecommerce-HuancaPereyra</NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <NavLink to="carrito/lista">
            Carrito
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartWidget />
    </Container>
  </Navbar>);

};

export default NavBar;
