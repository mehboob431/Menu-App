"use client"
import React, { useState, useEffect } from 'react'
import MenuCard from '../components/menucard'
import globalConstantUtil from '../globalConstantUtils'
import axios from 'axios'

const MenuItem = ({ categories, activeCategory }) => {
    const [menuItems, setMenuItems] = useState([])

    const getMenuItems = async () => {
        try {
            await axios.get(globalConstantUtil.baseUrl + '/items/get-item')
                .then((res) => {
                    console.log('res', res.data)
                    setMenuItems(res.data)
                })
        } catch (error) {
            console.error('error in fetching foodItems', error)
        }
    }

    useEffect(() => {
        getMenuItems()
    }, [])

    // Filter menu items by active category
    const filteredItems = menuItems.filter(item => item.category.toLowerCase() === activeCategory);

    return (
        <div className='bg-gray-900 min-h-screen flex flex-col items-start justify-center gap-4 overflow-y-auto'>
            <div className='flex flex-wrap gap-6 justify-center items-start px-2 pt-10 pb-10'>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, i) => (
                        <MenuCard
                            key={i}
                            id={item._id}
                            imageUrl={item.image}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    ))
                ) : (
                    <p className="text-white">No items available for this category.</p>
                )}
            </div>
        </div>
    )
}

export default MenuItem
