import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../utils/getImagePath';

const Item = ({ prod }) => {
    const isLowStock = prod.stock > 0 && prod.stock <= 3;
    const isOutOfStock = prod.stock === 0;

    return (

        <div className={`product-card ${isOutOfStock ? 'product-card--out-of-stock' : ''}`}>

            {isLowStock && (
                <span className="product-card__badge product-card__badge--warning">
                    ¡Últimas {prod.stock}!
                </span>
            )}
            {isOutOfStock && (
                <span className="product-card__badge product-card__badge--danger">
                    Agotado
                </span>
            )}

            <img className="product-card__img" src={getImagePath(prod.img)} alt={prod.name} />

            <div className="product-card__body">
                <h5 className="product-card__title">{prod.name}</h5>
                <p className="product-card__price">USD {prod.price.toLocaleString('es-AR')}</p>

                {isOutOfStock ? (
                    <button className="product-card__btn product-card__btn--disabled" disabled>
                        Sin Stock
                    </button>
                ) : (
                    <Link className="product-card__btn" to={`/item/${prod.id}`}>
                        Ver Más
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Item;