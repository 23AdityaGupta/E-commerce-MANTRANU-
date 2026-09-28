import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const SearchBar = () => {

    const { search, setSearch } = useContext(ShopContext)

    return (
        <div className='flex justify-center mb-8'>

            <div className='flex items-center border border-gray-300 rounded-full px-5 py-3 w-3/4 sm:w-1/2 max-w-[450px]'>

                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none bg-transparent text-sm'
                    type="text"
                    placeholder='Search products...'
                />

                <img
                    className='w-4'
                    src={assets.search_icon}
                    alt="search"
                />

            </div>

        </div>
    )
}

export default SearchBar