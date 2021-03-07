import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


// Pages
import About from "../pages/About";
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
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/contact">Contact Me</Nav.Link>
                   </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
    )
}


export default navigation
