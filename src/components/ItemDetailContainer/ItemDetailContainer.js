import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from "react";
import { arrayProductos } from "../../data/data";
import { useParams  } from "react-router-dom";



const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    const getItem = ()=>{
        return new Promise((resolve, reject)=>{
            resolve(arrayProductos[0])
        })
    }

    useEffect(() =>{
        getItem(productId - 1).then(response =>{
            setItem(response)
        }).catch (error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId]) 

    return (
        loading ?  <h2>Cargando...</h2>
        :
        <div>
        <ItemDetail {...item}/>
        </div>
    )
};

export default ItemDetailContainer;