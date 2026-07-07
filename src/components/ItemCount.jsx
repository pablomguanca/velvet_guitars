import React from 'react'
import { useState, useEffect } from 'react'

const ItemCount = ({ stock, onAdd, className }) => {
    const [count, setCount] = useState(1)
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > 0) {

            setCount(count - 1)
        }
    }
    const purchase = () => {
        onAdd(count)
    }



    console.log('ItemCount')
    return (
        <div className={`counter-container ${className}`}>
            <div className="counter-controls">
                <button className="btn btn-danger" onClick={restar}>-</button>

                <span className="counter-value">{count}</span>

                <button className="btn btn-success" onClick={sumar}>+</button>
            </div>
            <button className="btn btn-primary buy-btn" onClick={purchase} disabled={count === 0 || stock === 0}>Comprar</button>

        </div>
    )
}

export default ItemCount