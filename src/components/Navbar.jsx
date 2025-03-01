import React, { useContext, useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/shopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount} = useContext(ShopContext);

    const searchClick = ()=>{
      // alert('SEarch')
      setShowSearch(true)
    }

    
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to={'/'}>
        <img className='w-36' src={assets.logo} alt='logo' />
        </Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
      <NavLink to={'/'} className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={'/collection'} className="flex flex-col items-center gap-1">
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={'/about'} className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={'/contact'} className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={searchClick} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <div className='group relative'>
            <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
                
            </div>
            
        </div>
        <Link to={'/cart'} className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
            <p className='absolute right-[-10px] bottom-[9px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='sm:hidden cursor-pointer w-5' alt="" />
      </div>

      <div className={`absolute z-10 right-0 top-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
            <div  onClick={()=>setVisible(false)} className='cursor-pointer flex items-center gap-4 p-3'>
                <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                <p>Bach</p>
            </div>
            <NavLink onClick={()=>{setVisible(false)}} to={'/' } className="py-2 pl-3 bottom">Home</NavLink>
            <NavLink onClick={()=>{setVisible(false)}} to={'/collection' } className="py-2 pl-3 bottom">Collections</NavLink>
            <NavLink onClick={()=>{setVisible(false)}} to={'/about' } className="py-2 pl-3 bottom">About</NavLink>
            <NavLink onClick={()=>{setVisible(false)}} to={'/contact' } className="py-2 pl-3 bottom">Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
