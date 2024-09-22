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
                return [...prevItems, { ...newItem, quantity: 1, status: 'pending' }]; // Default status 'pending'
            }
        });
    };

    // Function to get the total count of items in the cart
    const getCartItemCount = () => {
        return items.length;
    };

    // CartContext.js
    // const getCartStatusCount = (status) => {
    //     return items.filter(item => item.status === status).length; // Count items with the specified status
    // };

    // Function to remove an item from the cart
    const removeItemFromCart = (itemId) => {
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    // Function to update the quantity of an item
    const updateItemQuantity = (itemId, newQuantity) => {
        setItems(prevItems => prevItems.map(item =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        ));
    };

    // Function to update the status of an item (e.g., from 'pending' to 'shipped')
    // const updateItemStatus = (itemId, newStatus) => {
    //     setItems(prevItems => prevItems.map(item =>
    //         item.id === itemId ? { ...item, status: newStatus } : item
    //     ));
    // };

    // Function to clear the cart
    const clearItemCart = () => {
        setItems([]);
    };

    return (
        <CartContext.Provider value={{
            items,
            addItemToCart,
            removeItemFromCart,
            updateItemQuantity,
            // updateItemStatus, // Add the updateItemStatus function
            clearItemCart,
            getCartItemCount,
            // getCartStatusCount // Include getCartStatusCount here
        }}>
            {children}
        </CartContext.Provider>
    );
};
