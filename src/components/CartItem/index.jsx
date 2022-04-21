import React from 'react';
import './styles.css';

const CartItem = ({ product }) => {
    return (
        <div className='cartItem'>
            <img src={product.image} alt="Imagen del producto" width={'100px'} />
            <p>Cantidad: {product.quantity}</p>
            <p style={{ width: "20%" }}>{product.name}</p>
            <p>${product.price}</p>
            <p>Total: ${product.price*product.quantity}</p>
            <button className='deleteProductButton'>X</button>
        </div>
    )
}
 
export default CartItem;