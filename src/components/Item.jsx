import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ prod }) => {
    return (
        <div className="product-card">
            <img className="product-card__img" src={prod.img} alt={prod.name} />
            <div className="product-card__body">
                <h5 className="product-card__title">{prod.name}</h5>
                <p className="product-card__price">USD {prod.price},00</p>
                <Link className="product-card__btn" to={`/item/${prod.id}`}>Ver Más</Link>
            </div>
        </div>
    );
}


export default Item