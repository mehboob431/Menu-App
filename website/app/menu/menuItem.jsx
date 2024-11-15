"use client";

import React, { useState, useEffect } from 'react';
import MenuCard from '../components/menucard';
import globalConstantUtil from '../globalConstantUtils';
import axios from 'axios';

const MenuItem = ({ categories, activeCategory }) => {
    const [menuItems, setMenuItems] = useState([]);

    const getMenuItems = async () => {
        try {
            await axios.get(globalConstantUtil.baseUrl + '/items/get-item')
                .then((res) => {
                    console.log('res', res.data);
                    setMenuItems(res.data);
                });
        } catch (error) {
            console.error('Error in fetching food items', error);
        }
    };

    useEffect(() => {
        getMenuItems();

        // Function to reload page on scroll attempt
        const handleScroll = (event) => {
            if (event.deltaY !== 0) {
                window.location.reload(); // Reload page if a scroll attempt is detected
            }
        };

        window.addEventListener('wheel', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    // Filter menu items by active category
    const filteredItems = menuItems.filter(item => item.category.toLowerCase() === activeCategory);

    return (
        <div className='bg-gray-100 min-h-screen flex flex-col pl-12 justify-start gap-6 overflow-y-auto'>
            <div className='flex overflow-x-auto space-x-4 p-2 mt-10 md:space-x-6 lg:overflow-hidden'>
                {
                    filteredItems.map((item, i) => (
                        <MenuCard
                            key={i}
                            id={item._id}
                            imageUrl={item.image}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            ingredient={item.ingredients}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default MenuItem;