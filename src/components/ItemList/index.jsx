import React from 'react';
import ItemCard from '../ItemCard';
import './styles.css';

const ItemList = ({ items }) => {
    return (
        <div className='itemListMainContainer'>
            {items.map(product => {
                return <ItemCard key={product.id} title={product.title} price={product.price} pictureUrl={product.pictureUrl} stock={product.stock} />
            })}
        </div>
    )
}

export default ItemList;