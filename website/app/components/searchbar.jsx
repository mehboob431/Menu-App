"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuCard from './menucard';
import globalConstantUtil from '../globalConstantUtils';

const SearchAndFilter = () => {
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([
    {
      name: "Select Category",
      value: ""
    }
  ]);

  const getMenuItems = async () => {
    try {
      const res = await axios.get(globalConstantUtil.baseUrl + '/items/get-item');
      setMenuItems(res.data);
    } catch (error) {
      console.error('Error in fetching food items:', error);
    }
  };

  const getCategory = async () => {
    try {
      const res = await axios.get(globalConstantUtil.baseUrl + '/categorys/get-category');
      let newCategories = res.data.map((cat) => ({
        name: cat.name,
        value: cat.name.toLowerCase(),
      }));
      if (newCategories.length > res.data.length) {
        newCategories = newCategories.filter((cat, i) => i < newCategories.length / 2);
      }
      setCategories([...categories, ...newCategories]);
    } catch (error) {
      console.error('Error in fetching categories:', error);
    }
  };

  useEffect(() => {
    getMenuItems();
    getCategory();
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Filter menu items based on category and search query
    console.log('Category:', category);
    console.log('Search Query:', searchQuery);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full p-4 md:p-6 rounded-3xl relative">
      <div className=" sticky top-20 z-50 bg-black bg-opacity-80 flex flex-col md:flex-row gap-4 items-center justify-around p-4 md:p-6 rounded-lg text-white w-full max-w-2xl">
        <div className="md:w-1/3 w-full">
          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-full bg-black text-white border border-white rounded-lg p-2"
          >
            {categories.map((cat, i) => (

              <option key={i} value={cat.value}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center w-full md:w-2/3">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search Food"
            className="w-full bg-black text-white border border-white rounded-lg p-2"

          />
        </div>
      </div>
      {(category || searchQuery) && <div className=" static top-40 overflow-y-auto flex flex-wrap gap-2 justify-center items-center px-2 mt-4">
        {menuItems
          .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (category === '' || item.category.toLowerCase() === category))
          .map((item, i) => (
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
      </div>}
    </div>
  );
};

export default SearchAndFilter;
