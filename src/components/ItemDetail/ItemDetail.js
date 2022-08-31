import {useState,useEffect} from 'react'
import getFetch from '../../data/data.js';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = () => {
const [data, setData] = useState({})
const [loading, setLoading] = useState(true)

useEffect(()=> {
    getFetch
    .then(response => {
        setData(response.find(prod => prod.id === 2))
        setLoading(false)
    })
}, [])

console.log(data)
        return (
            <div className="item-container">
            <h1>Detalle del Producto</h1>
        {
            loading ?  <h2>Cargando...</h2>
            :
            <div className="item-detail">
                    <div className="img_detail">
                        <img className="img_product" src={data.pictureUrl} alt="" />
                    </div>
                    <div className='text'>
                        <h2>{data.name}</h2>
                        <h3>${data.price}</h3>
                        <p>{data.description}</p>
                    </div>
                        <ItemCount/>
                    </div>
        }
    </div>
  )
}

export default ItemDetail