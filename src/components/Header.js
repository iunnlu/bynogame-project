import React from 'react';
import { Navbar, Nav, Image, Button } from 'react-bootstrap';
import { FaSignInAlt } from "react-icons/fa";
import '../styles/headerStyles.scss';

const Header = () => {
    return (
        <Navbar className="justify-content-between" fixed="top" variant="dark" expand="md">
            <Navbar.Brand href="/">
                <Image style={{width:"90px", height:"50px"}} src="https://i.hizliresim.com/WqVByP.png" rounded />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/"><i className="fa fa-home"></i> Home</Nav.Link>
                    <Nav.Link href="/"><i className="fa fa-film"></i> Popular Movies</Nav.Link>
                    <Nav.Link href="/"><i className="fa fa-tasks"></i> Categories</Nav.Link>
                    <Nav.Link href="/"><i className="fa fa-address-book"></i> Contact</Nav.Link>
                </Nav>
                <Button style={{marginRight:"15px"}} variant="outline-light"><i class="fa fa-user"></i>&nbsp;&nbsp;Sign Up</Button>
                <Button variant="outline-light"><FaSignInAlt />&nbsp;&nbsp;Sign In</Button>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;