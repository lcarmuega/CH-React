import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const promesa = new Promise((acc, rej) => {
                const response = fetch('/data.json');
                setTimeout(() => {
                    acc(response);
                })
            })
            try {
                const respuesta = await promesa;
                const data = await respuesta.json();
                const products = data.products;
                const foundProduct = products.filter(prod => prod.id === parseInt(id));
                setProduct(foundProduct[0]);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [id])

    return (
        <>
            <ItemDetail product={product} />
        </>
    )
}

export default ItemDetailContainer;