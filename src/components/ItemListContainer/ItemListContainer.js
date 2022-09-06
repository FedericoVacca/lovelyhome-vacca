import './ItemListContainer.css';
import { arrayProductos } from '../../data/data';
import ItemList from '../ItemList/ItemList';
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
    const{tipoProducto} = useParams();
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);


    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arrayProductos)
            reject(err => console.log(err))
        }, 2000)
    })
    
    useEffect(()=> {
        promesa.then(resultado=> {
            if(!tipoProducto){
            setData(resultado)
            setLoading(false)
        }else{
            const nuevaLista = resultado.filter(data=>data.categoria === tipoProducto);
            setData(nuevaLista)
        }
    })
    }, [tipoProducto])
    
    
    return ( 

        loading ? <h2>Cargando...</h2> 
        
        :
        <div className="contenedorLista">
            <h1>Lovely home</h1>
            <ItemList products={data}/>                   
        </div>
    )
};

export default ItemListContainer;