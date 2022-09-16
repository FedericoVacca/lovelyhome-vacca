import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ItemDetail = ({id,title, pictureUrl, price, description, stock}) => { 
    const [quantity, setQuantity] = useState(0)
    const { addProduct, getProductQuantity } = useContext(CartContext)
    const quantityAdded = getProductQuantity(id)

    const linkToCart = () => (
        <div>
            <Link to='/cart' className="link_tostify">Producto agregado con exito!</Link>
        </div>
    );
    
    const onAdd = (quantity)=>{
        setQuantity(quantity)
        addProduct({id, title, price, quantity})
        console.log("agregue", quantity)
        toast.success(linkToCart, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
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
                    </div>
                    <div className={`${stock === 0 ? 'no_number' : 'text_2'}`}>
                    { quantity > 0 ? <Link to='/cart' className="button_detalle">Show Car</Link> : <ItemCount stock={stock} initial={quantityAdded} onAdd={onAdd}/>}
                    <ToastContainer />
                </div>
                    </div>
        }
    </div>
)
}

export default ItemDetail;