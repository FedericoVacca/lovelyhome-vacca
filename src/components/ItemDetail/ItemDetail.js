import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './ItemDetail.css';




const ItemDetail = ({id,title, pictureUrl, price, description, stock}) => { 
    const [quantity, setQuantity] = useState(0)
    const { addProduct, getProductQuantity } = useContext(CartContext)
    const quantityAdded = getProductQuantity(id)
    
    const onAdd = (quantity)=>{
        setQuantity(quantity)
        addProduct({id, title, price, quantity})
        console.log("agregue", quantity)
    }
    
    
    return (
            <div className="item-container">
            <h1>Detalle del Producto</h1>
        {
            
            <div className="item-detail">
                    <div className="img_detail">
                        <img className="img_product" src={pictureUrl} alt={title}/>
                    </div>
                    <div className='text'>
                        <h2>{title}</h2>
                        <h3>${price}</h3>
                        <p>{description}</p>
                        <Link to="/Cart">
                        <button className='button_compra'>Mostrar Carrito</button>
                        </Link>
                    </div>
                        <ItemCount stock={stock} initial={quantityAdded}onAdd={onAdd}/>
                    </div>
        }
    </div>
)
}

export default ItemDetail;