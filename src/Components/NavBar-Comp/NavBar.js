import {useState} from 'react';
import { Container, Nav, Navbar, NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import CartWidget from '../Icon-Comp/CartWidget';
import {Link,NavLink } from 'react-router-dom';
import "./NavBar.css"
import CheckCompra from '../Check-Compra/CheckCompra';
import Swal from 'sweetalert2'

const NavBar = () => {
  const [dataSearch, setdataSearch] = useState({
    search:""
  });
  const irCompletando=(event)=>{
    setdataSearch({
      ...dataSearch,
      [event.target.name]:event.target.value
    })
  }

  return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        <NavLink to="/">IHP-BiKeS</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          name='search'
          onChange={irCompletando}
        />
        <CheckCompra dataSearch={dataSearch}/>
      </Form>
        <Nav className="me-auto">
          <NavDropdown title="Categorias" id="collasible-nav-dropdown" >
            <NavDropdown.Item ><NavLink to="category/MOUNTAIN BIKE">MOUNTAIN BIKE  </NavLink></NavDropdown.Item>
            <NavDropdown.Item ><NavLink to="category/FIXEI">FIXIE</NavLink></NavDropdown.Item>
            <NavDropdown.Item ><NavLink to="category/GRAVEL">GRAVEL</NavLink></NavDropdown.Item>
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
        
      </Navbar.Collapse>
      <NavLink to="cartList">
      <CartWidget />
      </NavLink>
    </Container>
  </Navbar>);

};

export default NavBar;
