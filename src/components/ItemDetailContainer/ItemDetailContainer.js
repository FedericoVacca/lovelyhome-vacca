import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    console.log({ id });
    
    useEffect(() =>{
        const queryDoc = doc(db, "items", id)
        getDoc(queryDoc).then(resp=>{
            const newDoc = {
                ...resp.data(),
                id:resp.id
            }
            setItem(newDoc);
        })
    }, [id]);
    console.log({ item });
    
        return (
            <div>
            <ItemDetail {...item}/>
            </div>
        );
    };    





export default ItemDetailContainer;