import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from "react";
import { arrayProductos } from "../../data/data";
import { useParams  } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    console.log({ id });
    
    useEffect(() =>{
        const producto = arrayProductos.find((item) => item.id == id);
        setItem(producto);
    }, [id]);

    console.log({ item });
    
        return (
            <div>
            <ItemDetail {...item}/>
            </div>
        );
    };    





export default ItemDetailContainer;