import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


const ItemDetail = (product) => {
/*const { name, price, pictureUrl, description,id } = product;*/    
    
    
    return (
            <div className="item-container">
            <h1>Detalle del Producto</h1>
        {
            
            <div className="item-detail">
                    <div className="img_detail">
                        <img className="img_product" src={product.pictureUrl} alt={product.name}/>
                    </div>
                    <div className='text'>
                        <h2>{product.name}</h2>
                        <h3>${product.price}</h3>
                        <p>{product.description}</p>
                    </div>
                        <ItemCount/>
                    </div>
        }
    </div>
)
}

export default ItemDetail;