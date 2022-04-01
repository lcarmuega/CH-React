import React, { useState } from 'react';
import './styles.css';

const ItemCount = ({ valorStock }) => {
    const [quantity, setQuantity] = useState(1);
    const [stock, setStock] = useState(valorStock);

    const addItem = () => {
        setQuantity(quantity + 1);
    }

    const removeItem = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const addToCart = () => {
        if (quantity <= stock) {
            alert("Se agregaron los productos al carrito");
            setStock(stock - quantity);
            setQuantity(1);
        } else {
            alert("No hay stock disponible para agregar los productos al carrito");
            setQuantity(1);
        }
    }

    return (
        <>
            <div className="counterContainer">
                <div className="quantityContainer">
                    <span className="counterIcon" style={{ color: "red" }} onClick={removeItem}>-</span>
                    <span className="itemQuantity">{quantity}</span>
                    <span className="counterIcon" style={{ color: "green" }} onClick={addItem}>+</span>
                </div>
                <button className="counterButton" onClick={addToCart}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount;