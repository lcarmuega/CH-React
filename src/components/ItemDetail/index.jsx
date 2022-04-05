import React from 'react';
import './styles.css';

const ItemDetail = ({product}) => {
    return (
        <div className='mainContainer'>
            <img src={require("../../assets/book-example.jpg")} alt="Tapa del libro" className='productDetailImage' />
            <div className='dataContainer'>
                <h3 className='productTitle'>{product.title}</h3>
                <h6 className='productPrice'>${product.price}</h6>
                <p className='productDescription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet iusto in, consectetur minus deserunt debitis mollitia sunt illo fugiat! 
                Numquam, voluptatibus minus? Porro illum, itaque numquam consectetur sapiente nisi nihil? Voluptatem aspernatur necessitatibus quia vitae saepe quae sapiente laborum culpa quidem,
                natus voluptates iste cum officiis molestiae ea incidunt atque sed adipisci delectus perferendis explicabo autem! Incidunt, eius.</p>
            </div>
        </div>
    )
}

export default ItemDetail;