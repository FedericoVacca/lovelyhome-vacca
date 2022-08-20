import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <div>
            <h1 className="greeting">{props.greeting}</h1>
        </div>
    )
};

export default ItemListContainer;