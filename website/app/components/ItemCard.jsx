"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from '../context/cartContext';


const ItemCard = ({ item }) => {

    const { removeItemFromCart, updateItemQuantity } = useCart()

    const handleQuantityIncrement = () => {
        // Increment the quantity by 1 and call the onQuantityChange function
        updateItemQuantity(item.id, item.quantity + 1)
        // updateItemQuantity(item.id, item.quantity + 1);
    };

    const handleQuantityDecrement = () => {
        // Decrement the quantity by 1 only if the quantity is greater than 1
        if (item.quantity > 1) {
            updateItemQuantity(item.id, item.quantity - 1)
            // updateItemQuantity(item.id, item.quantity - 1);
        }
    };



    return (
        <div className="bg-[#42f5a7] rounded-xl px-2 py-1 flex items-center justify-between mb-4 w-full">
            <div className='flex flex-row items-center justify-start w-full'>
                <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                />
                <div className="flex flex-col items-start justify-around px-1 w-full">
                    <div className="flex flex-row items-start justify-between px-1 w-full">
                        <div className="flex flex-col items-start max-w-7/12 py-2 px-1">
                            <h3 className="text-black font-medium">{item.name}</h3>
                            <p className="text-black font-thin">{`(${item.ingredient})`}</p>
                        </div>
                        <p className="text-black px-2 py-2 text-md font-medium md:text-lg lg:text-xl">{`Rs ${item.price}`}</p>
                    </div>
                    <div className="flex items-center space-x-2 px-3">
                        <button
                            onClick={handleQuantityDecrement}
                            className="text-black text-3xl font-medium"
                        >
                            -
                        </button>
                        <span className="text-black text-xl font-medium">{item.quantity}</span>
                        <button
                            onClick={handleQuantityIncrement}
                            className="text-black text-3xl font-medium"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            {/* Delete Button */}
            <button
                onClick={() => { removeItemFromCart(item.id) }}
                className=" text-black text-2xl font-bold ml-4"
            >
                <RiDeleteBin6Line />
            </button>
        </div>
    );
};

export default ItemCard;
