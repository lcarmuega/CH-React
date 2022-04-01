import React from 'react';
import ItemCount from '../ItemCount';
import './styles.css';

const Item = ({id, title, price, pictureUrl, stock}) => {
    return (
        <div className='productContainer' id={id}>
            <h6 className='productTitle'>{title}</h6>
            <img src={require("../../assets/book-example.jpg")} alt="Tapa del libro" className='productImage'/>
            <span className='productPrice'>${price}</span>
            <ItemCount valorStock={stock} />
        </div>
    )
}

export default Item;