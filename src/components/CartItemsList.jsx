import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { getImagePath } from '../utils/getImagePath'

const CartItemsList = () => {
    const { cart, clear, removeItem, total } = useContext(CartContext)

    return (
        <>
            <article>
                {cart.map((prod) => (
                    <div key={prod.id} className="cart-item">
                        <img src={getImagePath(detail.img)} alt={prod.name} />
                        <div className="cart-item__info">
                            <h3 className="cart-item__title">{prod.name}</h3>
                        </div>
                        <div className="cart-item__controls">
                            <span className="cart-item__quantity">{prod.quantity}</span>
                        </div>
                        <div className="cart-item__total">
                            ${(prod.quantity * prod.price).toLocaleString('es-AR')}
                        </div>
                        <button className="cart-item__remove" onClick={() => removeItem(prod.id)}>
                            <i className="bi bi-trash"></i>
                            X
                        </button>
                    </div>
                ))}
            </article>
            <div>
                <span className='cart-total'>Total a pagar: ${total()} ,00 </span>
            </div>
        </>
    )
}

export default CartItemsList