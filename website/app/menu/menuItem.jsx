"use client";
import React, { useState, useEffect } from "react";
import MenuCard from "../components/menucard";
import globalConstantUtil from "../globalConstantUtils";
import axios from "axios";
import "../globals.css";
const MenuItem = ({ categories, activeCategory }) => {
    const [menuItems, setMenuItems] = useState([]);

    const getMenuItems = async () => {
        try {
            const res = await axios.get(globalConstantUtil.baseUrl + "/items/get-item");
            console.log("res", res.data);
            setMenuItems(res.data);
        } catch (error) {
            console.error("Error in fetching food items", error);
        }
    };

    useEffect(() => {
        getMenuItems();
    }, []);

    // Filter menu items by active category
    const filteredItems = menuItems.filter(
        (item) => item.category.toLowerCase() === activeCategory
    );

    return (
        <div className="bg-gray-100 h-screen overflow-hidden">
            {/* Horizontal scrolling container */}
            <div className="flex overflow-x-auto space-x-4 p-4 h-full">
                {filteredItems.map((item, i) => (
                    <MenuCard
                        key={i}
                        id={item._id}
                        imageUrl={item.image}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        ingredient={item.ingredients}
                        className="min-w-[300px] flex-shrink-0" // Set minimum width and prevent shrinking
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuItem;
