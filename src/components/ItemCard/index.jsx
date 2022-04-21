import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../../context/CartProvider';
import ItemCount from '../ItemCount';
import './styles.css';

const ItemCard = ({product}) => {
    const [buttonFlag, setButtonFlag] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const {addToCart} = useContext(Cart);

    const onAdd = (quantity) => {
        setQuantity(quantity);
        setButtonFlag(true);
        addToCart(product, quantity);
    }

    return (
        <div className='productContainer' id={product.id}>
            <h6 className='productTitle'><Link to={`/item/${product.id}`}>{product.title}</Link></h6>
            <img src={product.image} alt="Tapa del libro" className='productImage'/>
            <span className='productPrice'>${product.price}</span>
            {(buttonFlag ? <Link style={{color: "#E3DFFF"}} to={"/cart"}><button className='goToCartButton'>Navegar al Carrito</button></Link> : <ItemCount onAdd={onAdd} valorStock={product.stock} />)}
        </div>
    )
}

export default ItemCard;