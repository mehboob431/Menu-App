"use client"
import React, { useState, useEffect } from 'react'
import MenuCard from '../components/menucard'
import globalConstantUtil from '../globalConstantUtils'
import axios from 'axios'

const menuItem = ({ categories, activeCategory }) => {
    const [menuItems, setMenuItems] = useState([])

    const getMenuItems = async () => {
        try {
            // await axios.get(globalConstantUtil.baseUrl + '/foodItems/')
            await axios.get(globalConstantUtil.baseUrl + '/items/get-item')
                // await axios.get('http://localhost:5000/api/items/get-item')
                .then((res) => {
                    console.log('res', res.data)
                    setMenuItems(res.data)
                })
        }
        catch (error) {
            console.error('error in fetching foodItems', error)
        }
    }

    useEffect(() => {
        getMenuItems()
    }, [])

    // Filter menu items by active category or show all items if 'all' is selected
    const filteredItems = activeCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category.toLowerCase() === activeCategory)

    return (
        <div className='bg-gray-900 min-h-screen flex flex-col items-start justify-center gap-4 overflow-y-auto'>
            <div className='flex flex-wrap gap-6 justify-center items-start px-2 pt-10 pb-10 '>
                {filteredItems.map((item, i) => (
                    <MenuCard
                        key={i}
                        id={item._id}
                        imageUrl={item.image}
                        name={item.name}
                        description={item.description}
                        // ingredient={item.ingredient[0]}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default menuItem
