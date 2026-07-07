import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Item from './Item';

const ItemDetail = ({ detail, related }) => {
    const [purchase, setPurchase] = useState(false);
    const { addItem } = useContext(CartContext);

    const onAdd = (cantidad) => {
        addItem(detail, cantidad);
        setPurchase(true);
    };

    return (
        <div className="product-detail">
            <h1 className="product-detail__title">Detalle de Producto</h1>

            <article className="product-detail__card">
                <div className="product-detail__image-container">
                    <img className="product-detail__img" src={detail.img} alt={detail.name} />
                </div>

                <div className="product-detail__info">
                    <h2 className="product-detail__name">{detail.name}</h2>
                    <p className="product-detail__description">{detail.description}</p>
                    <span className="product-detail__price">
                        USD {detail.price?.toLocaleString('es-AR')}
                    </span>

                    {detail.stock === 0 ? (
                        <span className="product-detail__stock product-detail__stock--danger">
                            ❌ Producto temporalmente agotado
                        </span>
                    ) : detail.stock <= 3 ? (
                        <span className="product-detail__stock product-detail__stock--warning">
                            🔥 ¡Apurate! Solo quedan {detail.stock} unidades
                        </span>
                    ) : (
                        <span className="product-detail__stock product-detail__stock--success">
                            ✓ Stock disponible: {detail.stock} unidades
                        </span>
                    )}

                    {purchase ? (
                        <div className="product-detail__actions">
                            <Link className="btn btn-outline" to='/'>Seguir comprando</Link>
                            <Link className="btn btn-dark" to='/cart'>Ir al Carrito</Link>
                        </div>
                    ) : (
                        <ItemCount stock={detail.stock} onAdd={onAdd} className="product-detail__counter" />
                    )}
                </div>
            </article>

            {related && related.length > 0 && (
                <section className="cross-selling">
                    <h3 className="cross-selling__title">También te puede interesar...</h3>
                    <div className="cross-selling__grid">
                        {related.slice(0, 3).map(prod => (
                            <Item key={prod.id} prod={prod} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ItemDetail;