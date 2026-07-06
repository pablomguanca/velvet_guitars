import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const OrderSummary = () => {
    const { total } = useContext(CartContext);
    const subtotal = total();
    const discount = 0;
    const totalFinal = subtotal - discount;

    return (
        <div className="order-summary-container">
            <h4 className="order-summary-title">Resumen de tu Orden</h4>

            <div className="summary-row">
                <span>Subtotal Productos</span>
                <span>${subtotal.toLocaleString("es-AR")}</span>
            </div>

            <div className="summary-row summary-row--discount">
                <span>Descuento</span>
                <span>-${discount.toLocaleString("es-AR")}</span>
            </div>

            <div className="summary-row summary-row--total">
                <span>Total Final</span>
                <span>${totalFinal.toLocaleString("es-AR")}</span>
            </div>
        </div>
    );
};

export default OrderSummary;