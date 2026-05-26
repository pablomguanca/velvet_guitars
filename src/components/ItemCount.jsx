import { useState } from "react" 

const ItemCount = () => {
    const [valor, setValor] = useState(0)
    const sumar = ()=> {
        setValor(valor + 1)
    }
    const restar = ()=> {
        setValor(valor - 1)
    }
    return (
        <div className="contador"> 
            <button onClick={restar}>-</button>
            <span>{valor}</span>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount