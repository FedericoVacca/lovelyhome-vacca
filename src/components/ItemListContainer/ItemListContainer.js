import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
    return (
        <div>
            
            <h1 className="greeting">{props.greeting}</h1>
            <ItemCount/>
        </div>
    )
};

export default ItemListContainer;