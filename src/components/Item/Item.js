
import { Link } from "react-router-dom";
import React from 'react';
import './Item.css';

const Item = ({product}) => {
    return (
        <div className="listPro">
            <div className="product" key={product.title}>
                    <img src={product.pictureUrl} alt={product.title}/>
                    <h1>{product.title}</h1>
                    <h2>${product.price}</h2>
                    <Link to={`/products/${product.id}`}>
                        <button className='btn-agregar'>Ver detalle</button>
                    </Link>
            </div>
        </div>
    )
}

export default Item;