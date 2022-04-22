import { createContext, useState } from 'react';

export const Cart = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

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
        
        const totalQuantity = cartQuantity + quantity;
        setCartQuantity(totalQuantity);        
    }

/*     const removeQuantityFromCart = (product, quantity) => {
        const producto = isInCart(product);
        producto.quantity -= quantity;

        const cartFiltrado = cart.filter(elemento => elemento.id !== product.id);
        cartFiltrado.push(producto);

        setCart(cartFiltrado);
    } */

    const removeProductFromCart = (product) => {
        const quantityToRemove = cart.find(item => item === product).quantity;
        const totalQuantity = cartQuantity - quantityToRemove;
        setCartQuantity(totalQuantity);      

        const cartFiltrado = cart.filter(element => element.id !== product.id);
        setCart(cartFiltrado);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id);
    }

    const calculatePurchaseTotal = () => {
        const total = cart.reduce( (total, item) => total += (item.price * item.quantity), 0);
        return total;
    }

    return (
        <Cart.Provider value={{
            cart, addToCart, calculatePurchaseTotal, cartQuantity, removeProductFromCart
        }}>
            {children}
        </Cart.Provider>
    )
}

export default CartProvider;

