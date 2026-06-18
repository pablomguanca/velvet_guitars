const OrderSummary = () => {
    return (
        <>
            <div className="summary-row">
                <span>Producto</span>
                <span>${subtotal.toLocaleString("es-AR")}</span>
            </div>

            <div className="summary-row summary-row--discount">
                <span>Descuento</span>
                <span>-${discount.toLocaleString("es-AR")}</span>
            </div>

            <div className="summary-row summary-row--total">
                <span>Total</span>
                <span>${total.toLocaleString("es-AR")}</span>
            </div>
        </>
    );
};

export default OrderSummary;