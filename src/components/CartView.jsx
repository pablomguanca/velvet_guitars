import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import CartItemsList from './CartItemsList'
import CartWidget from './CartWidget'

const CartView = () => {
    const { cart, clear, total } = useContext(CartContext)
    const navigate = useNavigate()

    return (
        <section className='cart-section'>
            <div className='cart-header'>
                <h2>Tu carrito</h2>
            </div>

            <CartItemsList />

            <div className='cart-summary'>
                <div className="cart-summary__total">
                    Total a pagar: <span>${total().toLocaleString('es-AR')}</span>
                </div>

                <div className='cart-summary__actions'>
                    <button className='btn-clear' onClick={clear}>
                        Vaciar carrito
                    </button>
                    <button
                        className='btn-checkout'
                        onClick={() => navigate('/checkout')}
                        disabled={cart.length === 0}
                    >
                        Finalizar compra
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CartView