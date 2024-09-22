"use client"
import React, { useState } from 'react'

const menunavbar = ({ categories, setActiveCategory }) => {
    const [active, setActive] = useState("all")

    const handleActive = (value) => {
        setActive(value)
        setActiveCategory(value)  // Update the active category in the parent

        // No scrolling needed; filtering will happen based on category selection
    }

    return (
        <div className='sticky top-16 z-50 flex overflow-x-auto justify-start md:justify-start lg:justify-center items-center gap-2 bg-white py-1 md:py-2 px-2 '>
            <div className={`py-1 px-2 text-center text-sm md:text-md rounded hover:bg-[#da6c1e] hover:text-white ${active === "all" ? 'bg-[#da6c1e] text-white' : 'bg-transparent text-gray-700'}`}
                onClick={() => handleActive("all")}
            >
                All
            </div>
            {categories && categories.map((item, i) => (
                <div
                    key={i}
                    className={`py-1 px-2 text-center text-sm md:text-md rounded hover:bg-[#da6c1e] hover:text-white ${active === item.value ? 'bg-[#da6c1e] text-white' : 'bg-transparent text-gray-700'}`}
                    onClick={() => handleActive(item.value)}
                >
                    {item.name}
                </div>
            ))}
        </div>
    )
}

export default menunavbar;
