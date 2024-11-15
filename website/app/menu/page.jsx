"use client"
import React, { useState, useEffect } from 'react'
import MenuNavbar from './menunavbar'
import MenuItem from './menuItem'
import globalConstantUtil from '../globalConstantUtils'
import axios from 'axios'
import Searchbar from '../components/searchbar'

const Page = () => {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState()

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
    <div className='relative w-screen h-screen overflow-hidden'>
      <div className='relative mt-16'>
        <Searchbar />
      </div>
      <div>
        {categories.length > 0 && (
          <>
            <MenuNavbar categories={categories} setActiveCategory={setActiveCategory} />
            <div className='relative h-full'>
              <MenuItem categories={categories} activeCategory={activeCategory || categories[0].value} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Page
