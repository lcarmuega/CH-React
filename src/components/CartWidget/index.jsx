import React, { useContext } from 'react';
import './styles.css';
import CartImage from '../../assets/shopping-cart.png';
import { Cart } from '../../context/CartProvider';
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {
  const { cartQuantity } = useContext(Cart);

  const navigate = useNavigate();

  return (
    <div className='cart-container' onClick={ () => navigate('/cart') }>
      <img src={CartImage} alt="Shopping Cart" className="cart-img" />
      <p className="cart-quantity">{cartQuantity}</p>
    </div>
  )
}

export default CartWidget;