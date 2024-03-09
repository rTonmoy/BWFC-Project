import React from 'react'
import "./menu.css"
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap"
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/logo.png"

const Menu = () => {
  return (
<Navbar expand="lg" className='bg'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Product <MdKeyboardArrowDown /></Nav.Link>
            <Nav.Link href="#link">Template <MdKeyboardArrowDown /></Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
          </Nav>
          <div className="btnn">
            <a href="#">Sign In</a>
            <a href="#">Start Free</a>
        </div>
        </Navbar.Collapse>


      </Container>
    </Navbar>
  )
}

export default Menu