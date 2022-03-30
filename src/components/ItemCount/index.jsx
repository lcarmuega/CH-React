import React, { useState } from 'react';
import './styles.css';

const ItemCount = () => {
    const [quantity, setQuantity] = useState(1);
    const [stock, setStock] = useState(8);

    const addItem = () => {
        if(quantity < stock){
            setQuantity(quantity + 1);
        } else {
            alert("No hay stock disponible!");
        }
    }

    const removeItem = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        } else {
            alert("No se puede restar otro item");
        }
    }

    return (
        <div className="counterContainer">
            <h6 className="itemTitle">Producto</h6>
            <div className="quantityContainer">
                <span className="counterIcon" style={{color: "red"}} onClick={removeItem}>-</span>
                <span className="itemQuantity">{quantity}</span>
                <span className="counterIcon" style={{color: "green"}}  onClick={addItem}>+</span>
            </div>
        </div>
    )
}

export default ItemCount;