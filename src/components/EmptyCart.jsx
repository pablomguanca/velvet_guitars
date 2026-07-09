import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <section className='empty-cart'>
            <h1 className='empty-cart__title'>¡Tu carrito está vacío!</h1>
            <p className='empty-cart__subtitle'>Te invitamos a ver nuestros productos</p>
            <Link to='/' className='empty-cart__btn'>Ir a comprar</Link>
        </section>
    )
}

export default EmptyCart