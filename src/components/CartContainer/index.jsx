import React, { useContext, useState, useEffect } from 'react';
import { Cart } from '../../context/CartProvider';
import './styles.css';
import CartItem from '../CartItem';
import CheckoutModal from '../CheckoutModal';
import { useNavigate } from 'react-router-dom';

const CartContainer = () => {
  const { cart, calculatePurchaseTotal } = useContext(Cart);

  const [total, setTotal] = useState();
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTotal(calculatePurchaseTotal());
  }, [total, calculatePurchaseTotal])

  const showModal = () => {
    setModal(true);
  }

  const hideModal = () => {
    setModal(false)
  }

  return (
    <div>
      {cart.map(prod => <CartItem product={prod} key={prod.id} />)}
      <h3 className='cartTotal'>Total: ${total}</h3>
      {total > 0 ?
        <button onClick={showModal} className='finishPurchaseButton'>Finalizar Compra</button>
        :
        <button onClick={ () => navigate('/')} className='finishPurchaseButton'>Navegar al Inicio</button>}
      {modal && <CheckoutModal
        hideModal={hideModal}
        cart={cart}
        total={total}
      />}
    </div>
  )
}

export default CartContainer;