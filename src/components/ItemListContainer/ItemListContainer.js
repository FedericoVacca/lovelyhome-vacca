import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";

const ItemListContainer = () => {
    const{categoria} = useParams();
    const [productos,setProductos] = useState([]); 
    
    useEffect(()=>{
        const getData = async()=>{
            try {
                let queryDoc = !categoria ? collection(db,"items") : query(collection(db,"items"),where("categoria","==",categoria));
                const response = await getDocs(queryDoc);
                const datos = response.docs.map(doc=>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                    }
                    return newDoc;
                });
                setProductos(datos)
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    },[categoria])
    
    return ( 

        <div className="contenedorLista">
            <h1>Lovely home</h1>
            <ItemList products={productos}/>                   
        </div>
    )
};

export default ItemListContainer;