import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import LogoVelvet from './LogoVelvet';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="velvet-navbar">
            <Container fluid>
                <LogoVelvet />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0 align-items-center">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/nuevos">Productos</Nav.Link>
                        <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
                        <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
                        <Nav.Link as={NavLink} to="/cart"><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar