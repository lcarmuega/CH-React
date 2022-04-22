import React, { useContext } from 'react';
import './styles.css';
import Logo from '../../assets/bookstore.png';
import { Cart } from '../../context/CartProvider';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { cartQuantity } = useContext(Cart);

  return (
    <div className='container'>
        <img src={Logo} alt="Bookstore Logo" className="logo"/>
        <h4><Link style={{color: "#E3DFFF"}} to={"/"}>Inicio</Link></h4>
        <h4><Link style={{color: "#E3DFFF"}} to={"/category/Fiction"}>Ficción</Link></h4>
        <h4><Link style={{color: "#E3DFFF"}} to={"/category/Non-fiction"}>No ficción</Link></h4>
        { cartQuantity ? <CartWidget/> : null }
    </div>
  )
}

export default NavBar