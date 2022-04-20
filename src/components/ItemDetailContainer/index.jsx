import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import { db } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const docRef = doc(db, "productos", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setProduct({id: docSnap.id, ...docSnap.data()})
                } else {
                    console.log("No such product!");
                }

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