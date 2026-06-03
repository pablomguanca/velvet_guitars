import React, { useContext } from 'react'
import CartView from './CarView'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'

const CartContainer = () => {
    const { cart } = useContext(CartContext)
    return (
        <>
            {cart.length > 0 ? <CartView /> : <EmptyCart />}
        </>
    )
}

export default CartContainer