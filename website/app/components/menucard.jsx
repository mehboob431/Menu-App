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
            addItemToCart({ id, imageUrl, name, description, ingredient, price });
            setIsAdded(true);
            message.success('Item Added successfully');
        }
    };

    const handleViewDetails = () => {
        setShowDescription(prevState => !prevState);
    };

    return (
        <div className="flex justify-center p-4 mx-auto relative">
            <div
                className="bg-white text-black rounded-3xl shadow-lg relative mt-10 pt-20 pb-4 px-4 transition-all duration-300"
                style={{ width: '220px', height: '320px', borderRadius: '25px' }}
            >
                {/* Image container with absolute positioning */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-36 h-36 rounded-full shadow-xl bg-white flex items-center justify-center">
                    <Image
                        src={imageUrl}
                        alt={name}
                        layout="fill"
                        className="object-cover rounded-full"
                    />
                </div>

                <div className="text-center mt-8 px-4">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{ingredient}</p>
                    <p className="text-orange-600 mt-1 font-semibold">Rs: {price}</p>
                </div>

                <div className="flex flex-col items-center gap-2 mt-4">
                    <button
                        className="w-full py-2 text-sm rounded font-semibold text-white bg-[#da6c1e] hover:bg-[#bf5719] transition-colors"
                        style={{ borderRadius: '20px' }}
                        onClick={handleAddToCart}
                    >
                        + Add To Cart
                    </button>
                    <button
                        className="w-full py-2 text-sm rounded font-semibold text-white bg-[#da6c1e] hover:bg-[#bf5719] transition-colors"
                        style={{ borderRadius: '20px' }}
                        onClick={handleViewDetails}
                    >
                        View Details
                    </button>
                </div>

                {/* Description overlay with bottom-to-top transition */}
                <div
                    className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 text-white text-center p-4 transition-transform duration-300 ease-in-out ${showDescription ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                    style={{ borderRadius: '25px' }}
                >
                    <p className="text-sm">{description}</p>
                    <button
                        className="absolute top-2 right-2 text-white text-lg"
                        onClick={handleViewDetails}
                    >
                        &times;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
