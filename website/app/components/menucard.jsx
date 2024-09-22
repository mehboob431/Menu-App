"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/cartContext';
import { message } from 'antd'; // Import Ant Design's message component
import 'antd/dist/reset.css'; // Ensure Ant Design styles are loaded

const Card = ({ id, imageUrl, name, description, ingredient, price }) => {
    const { addItemToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addItemToCart({ id, imageUrl, name, description, ingredient, price });
        setIsAdded(true);
        message.success('Item Added successfully'); // Show success message
    };

    return (
        <div className="relative max-w-xs mx-auto p-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-xl transition-transform">
            <div className="bg-[#1c1816] text-white rounded-xl overflow-hidden shadow-lg relative">
                {/* Image Container */}
                <div className="aspect-square relative rounded overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={name}
                        width={100}
                        height={100}
                        className="rounded object-cover w-full h-full"
                    />
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="font-bold text-xl">
                        {name}
                        {description && <span className="description-text"> ({description})</span>}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{ingredient}</p>

                    <div className="flex justify-between items-center mt-4">
                        <span className="text-lg font-semibold">Rs {price}</span>
                    </div>
                </div>

                {/* Add to Cart Button */}
                <div className="flex justify-center pb-4">
                    <button
                        className={`py-2 px-4 rounded-full font-semibold text-white 
                        ${isAdded ? 'bg-green-500 cursor-not-allowed' : 'bg-[#da6c1e] hover:bg-[#bf5719]'} transition-colors`}
                        onClick={handleAddToCart}
                        disabled={isAdded}
                    >
                        {isAdded ? 'Item ADDED' : '+ Add To Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
