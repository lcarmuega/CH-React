import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import './styles.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    (async () => {

      const promesa = new Promise((acc, rej) => {
        const response = fetch('/data.json');
        setTimeout(() => {
          acc(response);
        }, 1000)
      })

      try {
        const respuesta = await promesa;
        const data = await respuesta.json();
        const products = data.products;
        if (!id) {
          setProducts(products);
        } else {
          const filteredProduts = products.filter(prod => prod.category === id);
          setProducts(filteredProduts);
        }

      } catch (error) {
        console.log(error);
      }
    })()
  }, [id])

  return (
    <>
      <ItemList items={products} />
    </>
  )
}

export default ItemListContainer