import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { getImagePath } from '../utils/getImagePath'
import { toastError } from '../utils/customToasts'
import Swal from 'sweetalert2'

const CartItemsList = () => {
    const { cart, clear, removeItem, total } = useContext(CartContext)

    const handleRemove = (prod) => {
        if (cart.length === 1) {
            Swal.fire({
                title: '¿Querés vaciar el carrito?',
                text: "Estás por eliminar el último producto y vaciar tu carrito.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d4af37',
                cancelButtonColor: '#222',
                confirmButtonText: 'Sí, vaciar carrito',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    clear();
                }
            })
        } else {
            removeItem(prod.id);
            toastError(`${prod.name} eliminado`);
        }
    };

    return (
        <>
            <article>
                {cart.map((prod) => (
                    <div key={prod.id} className="cart-item">
                        <img src={getImagePath(prod.img)} alt={prod.name} />
                        <div className="cart-item__info">
                            <h3 className="cart-item__title">{prod.name}</h3>
                        </div>
                        <div className="cart-item__controls">
                            <span className="cart-item__quantity">{prod.quantity}</span>
                        </div>
                        <div className="cart-item__total">
                            USD {(prod.quantity * prod.price).toLocaleString('es-AR')}
                        </div>

                        <button className="cart-item__remove" onClick={() => handleRemove(prod)}>
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