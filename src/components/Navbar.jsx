import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoVelvet from '../assets/guitar_ecommerce_logo.png';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="velvet-navbar">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img className="logo-header" src={logoVelvet} alt="logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0 align-items-center">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar