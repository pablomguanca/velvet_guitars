import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem('velvetCart');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('velvetCart', JSON.stringify(cart));
    }, [cart]);

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((prod) => {
                    if (prod.id === item.id) {
                        return { ...prod, quantity: prod.quantity + qty };
                    } else {
                        return prod;
                    }
                })
            );
        } else {
            setCart([...cart, { ...item, quantity: qty }]);
        }
    };

    const clear = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const total = () => {
        return cart.reduce((acc, prod) => acc + (prod.quantity * prod.price), 0);
    };

    const totalImp = () => {
        return cart.reduce((acc, prod) => acc + (prod.quantity * prod.price), 0);
    };

    const totalQty = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    return (
        < CartContext.Provider value = {{ cart, addItem, removeItem, clear, total, totalQty }
}>
    { children }
        </CartContext.Provider >
    );
};