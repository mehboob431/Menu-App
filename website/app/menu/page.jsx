"use client"
import React, { useState, useEffect } from 'react'
import Pageheading from '../components/pageheading'
import MenuNavbar from './menunavbar'
import MenuItem from './menuItem'
import globalConstantUtil from '../globalConstantUtils'
import axios from 'axios'
import menubg from '../../public/menubg.png'  // Import the local image

const Page = () => {
  const htitle = "Menu"
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState("all")

  const getCategory = async () => {
    try {
      const res = await axios.get(globalConstantUtil.baseUrl + '/categorys/get-category')
      const newcategories = res.data.map((cat) => ({
        name: cat.name,
        value: cat.name.toLowerCase()
      }))
      setCategories(newcategories)
    }
    catch (error) {
      console.error('error in fetching categories', error)
    }
  }

  useEffect(() => {
    getCategory()
  }, [])

  return (
    <div className='relative'>
      <div className='relative '>
        {/* Use the imported image here */}
        <Pageheading htitle={htitle} bgimage={menubg} />
      </div>
      <div>
        {categories.length > 0 && (
          <>
            <MenuNavbar categories={categories} setActiveCategory={setActiveCategory} />
            <div className='relative '>
              <MenuItem categories={categories} activeCategory={activeCategory} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Page
