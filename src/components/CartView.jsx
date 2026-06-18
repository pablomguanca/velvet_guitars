import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import CartItemsList from './CartItemsList'
import CartWidget from './CartWidget'

const CartView = () => {

    const { cart, clear } = useContext(CartContext)
    const navigate = useNavigate()

    return (
        <section className='cart-section'>
            <div className='cart-header'>
            <h1>Tu carrito</h1>
            <CartWidget />
            </div>
            <CartItemsList />
            <div>
                <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
                <button className='btn btn-success' onClick={() => navigate('/checkout')} disabled={cart.length === 0}>Finalizar compra</button>
            </div>
        </section>
    )
}

export default CartView