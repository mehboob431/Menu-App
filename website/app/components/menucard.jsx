"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/cartContext';
import { message } from 'antd';
import 'antd/dist/reset.css';

const Card = ({ id, imageUrl, name, description, ingredient, price }) => {
    const { addItemToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const handleAddToCart = () => {
        if (isAdded) {
            message.warning('This item is already added');
        } else {
            // Add the item to the cart
            addItemToCart({ id, imageUrl, name, description, ingredient, price });
            setIsAdded(true); // Mark the item as added
            message.success('Item Added successfully');
        }
    };


    const handleViewDetails = () => {
        setShowDescription(prevState => !prevState);
    };

    return (
        <div className="relative max-w-xs mx-auto p-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-xl transition-transform">
            <div className="bg-[#1c1816] text-white rounded-xl overflow-hidden shadow-lg relative">

                <div className="aspect-square relative rounded overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={name}
                        width={100}
                        height={100}
                        className="rounded object-cover w-full h-full"
                    />
                    <div
                        className={`absolute inset-0 bg-black bg-opacity-75 transition-opacity duration-300 flex items-center justify-center ${showDescription ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <p className="text-white text-lg font-semibold px-4">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="font-bold text-xl">
                        {name}
                        {/* {description && <span className="description-text"> ({description})</span>} */}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{ingredient}</p>

                    <div className="flex justify-between items-center mt-4">
                        <span className="text-lg font-semibold">Rs {price}</span>
                    </div>
                </div>

                <div className="flex justify-between p-4">
                    <span>
                        <button
                            className="py-2 px-4 rounded-full font-semibold text-white bg-[#da6c1e] hover:bg-[#bf5719] transition-colors"
                            onClick={handleAddToCart}
                        >
                            + Add To Cart
                        </button>

                    </span>
                    <span className="ml-2">
                        <button
                            className="py-2 px-4 rounded-full font-semibold text-white bg-[#da6c1e] hover:bg-[#bf5719] transition-colors"
                            onClick={handleViewDetails}
                        >
                            View Details
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
