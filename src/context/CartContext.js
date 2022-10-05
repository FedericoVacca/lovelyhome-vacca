import { useState, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addProduct = (product) => {
        const isInCart = cart.some(item => item.id === product.id);
        if (isInCart === true) {
            const copyArray = cart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + product.quantity,
                    }
                }
                else {
                    return item
                }
            })
            setCart(copyArray)
        }
        else {
            setCart([...cart, product])
        }
    }

    const getQuantity = () => cart.reduce((total, prod) => (total += prod.quantity), 0);


    const isInCart = (id) => {
    const elementExist = cart.some((elemento)=>elemento.id === id);
    return elementExist;
};

    const removeProduct = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    };

    const clearCart = () => {
        setCart([])
    };

    const getProductQuantity = (id) => {
        const productById = cart.find(prod => prod.id === id)

        return productById?.quantity
    };

    const getTotal = () => cart.reduce((total, prod) => (total += prod.quantity * prod.price), 0);

    return (
        <CartContext.Provider value={{ cart, addProduct, isInCart, removeProduct, clearCart, getQuantity, getProductQuantity, getTotal }}>
            {children}
        </CartContext.Provider> 
    )
};