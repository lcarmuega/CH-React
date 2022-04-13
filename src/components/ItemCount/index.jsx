import React, { useState } from 'react';
import './styles.css';

const ItemCount = ({ valorStock, onAdd }) => {
    const [quantity, setQuantity] = useState(1);
    const [stock, setStock] = useState(valorStock);
    const [disableMinus, setDisableMinus] = useState(true);
    const [disablePlus, setDisablePlus] = useState(false);

    const addItem = () => {
        setQuantity(quantity + 1);
        setDisableMinus(false);
        if (quantity === stock - 1) {
            setDisablePlus(true);
        }
    }

    const removeItem = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setDisablePlus(false);
        } else {
            setDisableMinus(true);
        }
    }

    return (
        <>
            <div className="counterContainer">
                <div className="quantityContainer">
                    <button className="counterIcon" disabled={disableMinus} style={{ color: "red" }} onClick={removeItem}>-</button>
                    <span className="itemQuantity">{quantity}</span>
                    <button className="counterIcon" disabled={disablePlus} style={{ color: "green" }} onClick={addItem}>+</button>
                </div>
                <button className="counterButton" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount;