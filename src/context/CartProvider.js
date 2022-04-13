import { createContext, useState } from 'react';

export const Cart = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {

        const producto = isInCart(product);

        if (producto) {
            producto.quantity += quantity;
            const cartFiltrado = cart.filter(elemento => elemento.id !== producto.id);
            cartFiltrado.push(producto);
            setCart(cartFiltrado);
        } else {
            setCart([...cart, { ...product, quantity: quantity }]);
        }
        console.log(cart);
    }

    const removeQuantityFromCart = (product, quantity) => {
        const producto = isInCart(product);
        producto.quantity -= quantity;

        const cartFiltrado = cart.filter(elemento => elemento.id !== product.id);
        cartFiltrado.push(producto);

        setCart(cartFiltrado);
    }

    const removeProductFromCart = (product) => {
        const cartFiltrado = cart.filter(elemento => elemento.id !== product.id);
        setCart(cartFiltrado);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id);
    }

    return (
        <Cart.Provider value={{
            addToCart
        }}>
            {children}
        </Cart.Provider>
    )
}

export default CartProvider;

