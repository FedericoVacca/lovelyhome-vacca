import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({ stock = 5, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const minus = () => {
        if ( quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const plus = () => {
        if ( quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    return(
        <div className="container">
            <div className="count count_container">
                <div className="contar">
                    <button onClick={minus} className={`${quantity === 0 ? 'buttonDisabled' : 'btn-stock'}`}> - </button>
                    <h5 className="elementos">{quantity}</h5>
                    <button onClick={plus} className={`${quantity === stock ? 'buttonDisabled' : 'btn-stock'}`}> + </button>
                </div>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} className="btn-agregar">Agregar al carrito</button>
            </div>
            
        </div>
    )
}

export default ItemCount;