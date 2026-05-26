import CartWidget from './CartWidget';
import logoRSkate from '../assets/logo_rollerskate!.png';

const Navbar =()=>{
    return (
        <nav className="nav-container">
            <a href=""><img src={logoRSkate} alt="logo"/></a>
            <a href="">Productos</a> 
            <a href="">Novedades</a>
            <a href="">Hot Sale</a>
            <a href="">Nosotros</a>
            <a href="">Mi Cuenta</a>
            <CartWidget/>
        </nav>
    )
}

export default Navbar