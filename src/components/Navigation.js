import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


// Pages
import About from "../pages/about/About";
import ContactUs from "../pages/ContactUs";
import Portfolio from "../pages/Portfolio";
import App from '../App';

const navigation = () => {

    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Mike Tkachuk</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className = "navlink" to="/portfolio">Portfolio</Link>
                        <Link className = "navlink" to="/">About </Link>
                        <Link className = "navlink" to="/contact">Contact Me</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}


export default navigation
