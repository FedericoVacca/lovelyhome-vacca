import './CartWidget.css';
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartWidget (){
return (
    <Link to="/cart">
      <div className='btn-carrito'> 
        <FaCartPlus/>
      </div>
    </Link>
    
  )
}

export default CartWidget