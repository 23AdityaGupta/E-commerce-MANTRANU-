import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import SearchBar from '../components/SearchBar'

const Collection = () => {
  
  const [showFilters, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  
  const [subcategory, setSubCategory] = useState([])
  const { products, search } = useContext(ShopContext)


  // category array create ho rhi hai
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value)) //ye category hatane k liye
    } else {
      setCategory(prev => [...prev, e.target.value])//ye category add karne k liye
    }
  }

  // subcategory array create ho rhi hai 
  const toggleSubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))//ye subcategory remove karne k liye
    } else {
      setSubCategory(prev => [...prev, e.target.value]) //ye subcategory add karne k liye
    }
  }


  //ye filtering ka logic
  const applyFilter = () => {
    let productsCopy = products.slice(); //yha saare products hai productsCopy mae

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category)); //yha productsCopy k saare elements ko filter karke wapas sae productsCopy mae do 
    }

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory)); //yha productsCopy k saare elements ko filter karke wapas sae productsCopy mae do 
    }

    if (search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterProducts(productsCopy) //yha filterProduct mae naye products daal rhe hai and agar koi filter select nhi kiya to saare products ayenge, aur yhi page par render honge
  }

  //ye sorting ka logic
  const sortProduct = (e) => {
    const sortValue = e.target.value;

    let fpCopy = [...filterProducts]; //here we can use slice also 

    switch (sortValue) {

      case "low-high":
        fpCopy.sort((a, b) => a.price - b.price);
        setFilterProducts(fpCopy);
        break;

      case "high-low":
        fpCopy.sort((a, b) => b.price - a.price);
        setFilterProducts(fpCopy);
        break;

      case "relavent":
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subcategory, search]) //jab bhi ye teeno state change hogi to applyFilter function run hoga


  return (
    <>
      <SearchBar/>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

        {/* Filter Options */}
        <div className='min-w-60'>


          <p className='my-2 text-xl flex cursor-pointer gap-2'>FILTERS</p>


          {/* LEFT SIDE */}
          {/*CATEGORY*/}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Men'} onChange={toggleCategory} className='w-3' />
                Men
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Women'} onChange={toggleCategory} className='w-3' />
                Women
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Kids'} onChange={toggleCategory} className='w-3' />
                Kids
              </p>
            </div>
          </div>

          {/* SUBCATEGORY */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Topwear'} onChange={toggleSubCategory} className='w-3' />
                Top Wear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} className='w-3' />
                Bottom Wear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} className='w-3' />
                Winter Wear
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />

            {/* Sort Feature */}
            <select onChange={sortProduct} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item, index) => (
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
              ))
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default Collection