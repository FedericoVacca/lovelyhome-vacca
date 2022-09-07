import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';



const ItemDetail = ({id, name, pictureUrl, categoria, price, description}) => { 
    
    const onAdd = (quantity)=>{
        console.log("onAdd", quantity)
    }
    
    
    return (
            <div className="item-container">
            <h1>Detalle del Producto</h1>
        {
            
            <div className="item-detail">
                    <div className="img_detail">
                        <img className="img_product" src={pictureUrl} alt={name}/>
                    </div>
                    <div className='text'>
                        <h4>{categoria}</h4>
                        <h2>{name}</h2>
                        <h3>${price}</h3>
                        <p>{description}</p>
                    </div>
                        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                    </div>
        }
    </div>
)
}

export default ItemDetail;