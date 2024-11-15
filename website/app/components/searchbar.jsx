import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuCard from './menucard';
import globalConstantUtil from '../globalConstantUtils';
import { FaSearch } from 'react-icons/fa';

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

  return (
    <div className="flex flex-col justify-center items-center h-full w-full p-4 md:p-6 rounded-3xl relative">
      {/* Search bar and category select */}
      <div className="sticky top-20 z-50  bg-opacity-80 flex flex-col md:flex-row gap-4 items-center justify-around p-4 md:p-6 rounded-lg text-white w-full max-w-2xl">
        <div className="relative sticky flex items-center justify-center w-full md:w-2/3">
          <FaSearch className="absolute left-4 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search Food"
            className="w-full text-black border-none rounded-full p-4 pl-12"
            style={{
              background: 'linear-gradient( rgba(255, 255, 255, 0.9), rgba(230, 230, 230, 0.9))',
            }}
          />


        </div>
      </div>

      {/* Menu items filtered based on search and category */}
      {(category || searchQuery) && (
        <div className="relative top-32 lg:top-28 overflow-y-auto flex flex-wrap gap-2 justify-start items-start py-2 px-2 mt-4 max-h-screen">
          {menuItems
            .filter((item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
              (category === '' || item.category.toLowerCase() === category)
            )
            .map((item, i) => (
              <MenuCard
                key={i}
                id={item._id}
                imageUrl={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;
