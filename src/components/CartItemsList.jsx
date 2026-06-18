import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItemsList = () => {
    const { cart, clear, removeItem, total } = useContext(CartContext)

    return (
        <>
            <article>
                {
                    cart.map((compra) => (
                        <div key={compra.id} className='cart-item'>
                            <img src={compra.img} alt={compra.name} />

                            <div className='cart-item__info'>
                                <span className='cart-item__description'>{compra.name}</span>
                                <div className='cart-item__controls'>
                                    <span className='cart-item__quantity'>{compra.quantity} x </span>
                                    <span className='cart-item__price'>${compra.price}</span>
                                </div>
                                <span className='cart-item__total'>Precio final: ${compra.price * compra.quantity}</span>
                            </div>

                            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>X</button>
                        </div>
                    ))
                }
            </article>
            <div>
                <span className='cart-total'>Total a pagar: ${total()} ,00 </span>
            </div>
        </>
    )
}

export default CartItemsList