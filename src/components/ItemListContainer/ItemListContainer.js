import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = (props) => {
    return (
        <div>
            <div>
                <ItemList/>
            </div>
            <h1 className="greeting">{props.greeting}</h1>
        </div>
    )
};

export default ItemListContainer;