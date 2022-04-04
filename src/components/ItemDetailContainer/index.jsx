import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        ( async ()=> {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/2');
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <>
            <ItemDetail product={product} />
        </>
    )
}

export default ItemDetailContainer;