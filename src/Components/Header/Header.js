import './Header.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar className='header-section' bg="transparent" expand="lg">
        <Container className='header' fluid>
          <Navbar.Brand id='topo' href="#"><img src='./logo.png'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav 
              className="header-menu-color ms-auto my-2 my-lg-0 me-5"
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <Nav.Link href="#sobre">Sobre</Nav.Link>
              <Nav.Link href="#diferenciais">Diferenciais</Nav.Link>
              <Nav.Link href="#servicos">Serviços</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link className='header-contato-icon' href='https://api.whatsapp.com/send?phone=5545991445454'><img src='/contato.png' />Contato</Nav.Link>
        </Container>
      </Navbar>
    )
}

export default Header





