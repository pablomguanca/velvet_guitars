import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'



const CartView = () => {
    const { cart, clear, removeItem, total } = useContext(CartContext)

    return (
        <div className='cart-section'>
            <h1 className='cart-title'>Tu carrito 🛒</h1>
            <div>
                {
                    cart.map((compra) => (
                        <div key={compra.id} className='cart-item'>
                            <img src={compra.img} alt={compra.name} />

                            <div className='cart-item__info'>
                                <span className='cart-item__description'>{compra.name}</span>
                                <div className='cart-item__controls'>
                                    <span className='cart-item__quantity'>{compra.quantity}</span>
                                    <span className='cart-item__price'>${compra.price}</span>
                                </div>
                                <span className='cart-item__total'>Precio final: ${compra.price * compra.quantity}</span>
                            </div>

                            <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>X</button>
                        </div>
                    ))
                }
            </div>
            <span className='cart-total'>Total a pagar: ${total()} ,00 </span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%', padding: '2rem' }}>
                <button className='btn btn-danger' onClick={clear} >Vaciar carrito</button>
                <button className='btn btn-success' >Termirar compra</button>
            </div>
        </div>
    )
}

export default CartView