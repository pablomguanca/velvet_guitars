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
            <h1>Detalle de Producto</h1>
            <article className="product-detail__card">
                <h2>{detail.name}</h2>
                <img src={detail.img} alt={detail.name} />
                <p>{detail.description}</p>
                <span className='product-detail__card--price'>${detail.price.toLocaleString('es-AR')}</span>
                <span className='product-detail__card--stock'>stock disponible: {detail.stock} unidades</span>
                {purchase
                    ? <div className="purchase-options">
                        <Link className='btn btn-dark' to='/'>Seguir comprando</Link>
                        <Link className='btn btn-dark' to='/cart'>Ir al Carrito</Link>
                    </div>
                    : <ItemCount stock={detail.stock} onAdd={onAdd} className="product-detail__card--counter" />
                }
            </article >
        </div>
    )
}

export default ItemDetail