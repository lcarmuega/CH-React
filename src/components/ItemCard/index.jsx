import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './styles.css';

const ItemCard = ({id, title, price, pictureUrl, stock}) => {
    return (
        <div className='productContainer' id={id}>
            <h6 className='productTitle'><Link to={`/item/${id}`}>{title}</Link></h6>
            <img src={pictureUrl} alt="Tapa del libro" className='productImage'/>
            <span className='productPrice'>${price}</span>
            <ItemCount valorStock={stock} />
        </div>
    )
}

export default ItemCard;