import React from 'react';
import './styles.css';
import Logo from '../../assets/bookstore.png';
import CartWidget from '../CartWidget';

const NavBar = () => {
  return (
    <div className='container'>
        <img src={Logo} alt="Bookstore Logo" className="logo"/>
        <h4>Inicio</h4>
        <h4>Productos</h4>
        <h4>FAQ</h4>
        <h4>Nosotros</h4>
        <CartWidget/>
    </div>
  )
}

export default NavBar