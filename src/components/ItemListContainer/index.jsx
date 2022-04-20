import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import './styles.css';
import { db } from '../../firebase/config';
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const dbProducts = []
        querySnapshot.forEach((doc) => {
          dbProducts.push({ id: doc.id, ...doc.data() })
        });
        if (!id) {
          setProducts(dbProducts);
        } else {
          const filteredProducts = dbProducts.filter(prod => prod.category === id)
          setProducts(filteredProducts);
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