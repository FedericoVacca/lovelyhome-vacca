import './CartWidget.css';
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'


function CartWidget (){
  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()

  return (
    <div className={`${quantity === 0 ? 'no_number' : 'div_principal'}`}>
    <Link to="/cart">
      <div className='btn-carrito'> 
        <FaCartPlus/>
        <p className='number'>{quantity}</p>
      </div>
    </Link>
    </div>
  )
}

export default CartWidget