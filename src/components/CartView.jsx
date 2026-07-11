import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate, Link } from 'react-router-dom'
import CartItemsList from './CartItemsList'
import CartWidget from './CartWidget'
import Swal from 'sweetalert2'

const CartView = () => {
    const { cart, clear, total } = useContext(CartContext)
    const navigate = useNavigate()

    const handleClearCart = () => {
        Swal.fire({
            title: '¿Querés vaciar tu carrito?',
            text: "Vas a eliminar todos los productos de tu carrito.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#1a1a1a',
            cancelButtonColor: '#dc3545',
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                clear();
                Swal.fire({
                    title: '¡Vaciado!',
                    text: 'Tu carrito está limpio.',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        });
    }

    return (
        <section className='cart-section'>
            <div className='cart-header'>
                <h2>Tu carrito</h2>
            </div>

            <CartItemsList />

            <div className='cart-summary'>
                <div className="cart-summary__total">
                    Total a pagar: <span>USD{total().toLocaleString('es-AR')}</span>
                </div>

                <div className='cart-summary__actions'>
                    <button className='btn-clear' onClick={handleClearCart}>
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