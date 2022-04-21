import React, { useContext } from 'react';
import './styles.css';
import CartImage from '../../assets/shopping-cart.png';
import { Link } from 'react-router-dom';
import { Cart } from '../../context/CartProvider';

const CartWidget = () => {
  const { cartQuantity } = useContext(Cart);

  return (
    <div className='cart-container'>
      <img src={CartImage} alt="Shopping Cart" className="cart-img" />
      <Link style={{ color: "#E3DFFF" }} className="cart-quantity" to={"/cart"}>{cartQuantity}</Link>
    </div>
  )
}

export default CartWidget;