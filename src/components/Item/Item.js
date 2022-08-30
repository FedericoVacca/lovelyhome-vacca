
import React from 'react'
import './Item.css'

const Item = ({data}) => {
    return (
        <div>
            <div className="product" key={data.title}>
                    <img src={data.pictureUrl} alt="" />
                    <h1>{data.title}</h1>
                    <h2>${data.price}</h2>
                    <button className='btn-agregar'>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default Item