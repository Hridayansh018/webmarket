import React from 'react'
import {assets } from "../assets/frontend_assets/assets.js"
import { NavLink,Link} from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {

  const [visible,setVisible] = useState(false);

  return (
  <div className='flex items-center py-0 font-medium inset-  justify-between bg-gray-800 bg-opacity-30 px-3 md:px-6 backdrop-filter backdrop-blur-2xl'>
    <img src={assets.logo} alt="" className='w-40 mr-2'/>
    
    <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

      <NavLink to={"/"} className='flex flex-col items-center gap-1'>
        <p>HOME</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      </NavLink>

      <NavLink to={"/collection"} className='flex flex-col items-center gap-1'>
        <p>COLLECTION</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      </NavLink>

      <NavLink to={"/about"} className='flex flex-col items-center gap-1'>
        <p>ABOUT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      </NavLink>

      <NavLink to={"/contact"} className= 'flex flex-col items-center gap-1'>
        <p>CONTACT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
      </NavLink>

    </ul>

    <div className="flex items-center gap-6">
      <img src={assets.search_icon} className='w-5 cursor-pointer' />
      <div className="group relative">
        <img src={assets.profile_icon} className='w-5 cursor-pointer' />
        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4  ">
          <div className="w-24 flex flex-col gap-2 py-3 px-2 items-center bg-slate-100 text-gray-500 rounded">
            <p className='cursor-pointer hover:text-black'>My Profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p className='cursor-pointer hover:text-black'>Logout</p>
          </div>
        </div>
      </div>

      <Link to={"/cart"} className='relative'>
        <img src={assets.cart_icon} className='w-6 cursor-pointer min-w-6 lg:mr-10' />
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white aspect-square rounded-full text-[10px] font-bold mr-10">0</p>
      </Link>
      <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden mr-2' />
    </div>
    {/* sidebar menu for mobile screen */}
    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full h-96" : "w-0"} `}>
      <div className="flex flex-col text-gray-600">
        <div className='flex items-center gap-4'>
          <img onClick={()=>setVisible(false)} src={assets.dropdown_icon} className='h-4 rotate-180' />
          <p className="cursor-pointer">Back</p>
        </div>
        <NavLink onClick={()=>setVisible(false)} to={"/"} className={"mx-3 mt-3 border-b"}>HOME</NavLink>
        <NavLink onClick={()=>setVisible(false)} to={"/collection"} className={"mx-3 mt-3 border-b"}>COLLECTION</NavLink>
        <NavLink onClick={()=>setVisible(false)} to={"/about"} className={"mx-3 mt-3 border-b"}>ABOUT</NavLink>
        <NavLink onClick={()=>setVisible(false)} to={"/contact"} className={"mx-3 mt-3 border-b"}>CONTACT</NavLink>
      
      </div>
    </div>
  </div>
  )
}

export default Navbar
