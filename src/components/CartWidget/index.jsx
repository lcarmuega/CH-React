import React from 'react';
import './styles.css';
import Cart from '../../assets/shopping-cart.png';

const CartWidget = () => {
  return (
    <div className='cart-container'>
        <img src={Cart} alt="Shopping Cart" className="cart-img"/>
        <p className="cart-quantity">1</p>
    </div>
  )
}

export default CartWidget