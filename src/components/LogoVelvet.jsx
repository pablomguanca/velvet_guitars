import { Link } from 'react-router-dom'
import logoVelvet from '../assets/guitar_ecommerce_logo.png';

const LogoVelvet = () => {
    return (
        <Link to="/">
            <img className='logo-velvet' src={logoVelvet} alt="Velvet Guitars" />
        </Link>
    )
}

export default LogoVelvet