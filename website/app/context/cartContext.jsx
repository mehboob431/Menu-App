// CartContext.js
"use client"
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItemToCart = (newItem) => {
        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === newItem.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...newItem, quantity: 1 }];
            }
        });
    };

    const getCartItemCount = () => {
        return items.length; // Fixed: Changed cartItems to items
    };

    const removeItemFromCart = (itemId) => {
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const updateItemQuantity = (itemId, newQuantity) => {
        setItems(prevItems => prevItems.map(item =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        ));
    };

    const clearItemCart = () => {
        setItems([]);
    };

    return (
        <CartContext.Provider value={{ items, addItemToCart, removeItemFromCart, updateItemQuantity, clearItemCart, getCartItemCount }}>
            {children}
        </CartContext.Provider>
    );
};
