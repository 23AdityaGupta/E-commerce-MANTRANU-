import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const { getCartCount } = useContext(ShopContext);

    return (
        <div className=' flex items-center justify-between py-5 font-medium'>
            <Link to={'/'}>
                <img src={assets.logo} className='w-36' />
            </Link>


            <ul className=' hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-900 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-900 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-900 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-900 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>


                <div className='group relative'>
                    <Link to='/login'>
                        <img className='w-5 cursor-pointer' src={assets.profile_icon} />
                    </Link>


                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <Link to={'/profile'}>
                            <p className='cursor-pointer hover:text-black'>My profile</p>
                            </Link>
                            
                            <Link to='/orders'>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            </Link>
                            <Link to='/'>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                            </Link>
                            
                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' />
                    <p className='absolute w-4 right-[-5px] bottom-[-5px]  text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>

                <img
                    onClick={() => { setVisible(true) }}
                    src={assets.menu_icon}
                    className='w-5 cursor-pointer sm:hidden'
                />
            </div>

            {/* sidebar mennu for small screen */}

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div onClick={() => { setVisible(false) }} className='flex flex-col items-center gap-4 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180' src={assets.cross_icon} />
                </div>

                <div onClick={() => { setVisible(false) }} className='flex flex-col '>
                    <NavLink className='py-2 pl-6 border' to='/'>Home</NavLink>
                    <NavLink className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
                    <NavLink className='py-2 pl-6 border' to='/about'>About</NavLink>
                    <NavLink className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
