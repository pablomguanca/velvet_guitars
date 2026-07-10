import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CrossSelling from './CrossSelling';
import { getImagePath } from '../utils/getImagePath';

const ItemDetail = ({ detail }) => {
    const [purchase, setPurchase] = useState(false);
    const { addItem } = useContext(CartContext);

    const onAdd = (cantidad) => {
        addItem(detail, cantidad);
        setPurchase(true);
    };

    return (
        <div className="product-detail">
            <article className="product-detail__card">
                <img src={getImagePath(detail.img)} alt={detail.name} />

                <h2>{detail.name}</h2>
                <p>{detail.description}</p>

                <span className="product-detail__card--price">
                    ${detail.price?.toLocaleString('es-AR')}
                </span>
                {detail.stock === 0 ? (
                    <span className="product-detail__card--stock text-danger fw-bold">
                        ❌ Producto temporalmente agotado
                    </span>
                ) : detail.stock <= 3 ? (
                    <span className="product-detail__card--stock text-danger fw-bold fst-italic">
                        🔥 ¡Apurate! Solo quedan {detail.stock} unidades
                    </span>
                ) : (
                    <span className="product-detail__card--stock">
                        ✓ Stock disponible: {detail.stock} unidades
                    </span>
                )}

                <div className="product-detail__card--counter">
                    {purchase ? (
                        <div className="purchase-options">
                            <Link className="buy-btn" to='/'>Seguir comprando</Link>
                            <Link className="buy-btn" to='/cart'>Ir al Carrito</Link>
                        </div>
                    ) : (
                        <ItemCount stock={detail.stock} onAdd={onAdd} />
                    )}
                </div>
            </article>

            {detail.category && (
                <CrossSelling category={detail.category} currentId={detail.id} />
            )}
        </div>
    );
};

export default ItemDetail;