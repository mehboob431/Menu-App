"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/cartContext';
import Toast from './Toast';

const Card = ({ id, imageUrl, name, description, ingredient, price }) => {
    const { addItemToCart } = useCart();
    const [showToast, setShowToast] = useState(false);


    const handleAddToCart = () => {
        addItemToCart({ id, imageUrl, name, description, ingredient, price });
        setShowToast(true);
    };

    const handleCloseToast = () => {
        setShowToast(false);
    };


    return (
        <div className="bg-[#1c1816] text-white rounded-lg overflow-hidden shadow-lg relative max-w-xs mx-auto">
            <div className="max-h-80 h-80 relative rounded">
                <Image src={imageUrl} alt={name} width={400} height={300} className="rounded h-full" />
            </div>
            <div className="p-4">
                <h3 className="font-bold text-lg">{name}{description && ` (${description})`}</h3>
                <p className="text-sm text-gray-400">{ingredient}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-semibold">Rs {price}</span>
                </div>
            </div>
            <div className="flex justify-center pb-4">
                <button
                    className="bg-[#da6c1e] text-white py-2 px-4 rounded-full"
                    onClick={handleAddToCart}
                >
                    + Add To Cart
                </button>
            </div>
            {showToast && <Toast message="Item is added to cart" onClose={handleCloseToast} />}

        </div>
    );
};

export default Card;
