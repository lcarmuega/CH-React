import React from 'react';
import ItemCount from '../ItemCount';
import './styles.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div className="greeting">{greeting}</div>
      <ItemCount />
    </>
  )
}

export default ItemListContainer