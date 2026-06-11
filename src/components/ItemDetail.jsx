import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ detail }) => {
    const [purchase, setPurchase] = useState(false)
    const { cart, addItem } = useContext(CartContext)
    console.log('contexto', cart)

    const onAdd = (cantidad) => {
        addItem(detail, cantidad)
        setPurchase(true)
    }


    console.log('ItemDetail')
    return (
        <div className="product-detail">
            <article className="detail-card">
                <h2>Detalle del producto {detail.name}</h2>
                <img src={detail.img} alt={detail.name} />
                <p>{detail.description}</p>
                <p>${detail.price}</p>
                <p>stock disponible: {detail.stock} unidades</p>
            </article>
            {purchase
                ? <div className="purchase-options">
                    <Link className='btn btn-dark' to='/'>Seguir comprando</Link>
                    <Link className='btn btn-dark' to='/cart'>Ir al Carrito</Link>
                </div>
                : <ItemCount stock={detail.stock} onAdd={onAdd} />
            }
        </div>
    )
}

export default ItemDetail