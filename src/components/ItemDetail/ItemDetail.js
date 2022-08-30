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
        setData(response.find(prod => prod.id === 1))
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
                    <img src={data.pictureUrl} alt="" />
                    <h2>{data.name}</h2>
                    <h3>${data.price}</h3>
                    <p>{data.description}</p>
                    <ItemCount/>
                </div>
        }
    </div>
  )
}

export default ItemDetail