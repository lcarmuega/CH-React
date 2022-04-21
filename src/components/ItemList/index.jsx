import React from 'react';
import ItemCard from '../ItemCard';
import './styles.css';

const ItemList = ({ items }) => {
    return (
        <div className='itemListMainContainer'>
            {items.map(product => {
                return <ItemCard key={product.id} product={product} />
            })}
        </div>
    )
}

export default ItemList;