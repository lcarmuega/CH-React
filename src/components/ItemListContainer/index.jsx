import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import './styles.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {

      const promesa = new Promise((acc, rej) => {
        const response = fetch('/data.json');
        setTimeout(() => {
          acc(response);
        }, 2000)
      })
      try {
        const respuesta = await promesa;
        const data = await respuesta.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  return (
    <>
      <ItemList items={products} />
    </>
  )
}

export default ItemListContainer