import React, { useState } from 'react'
import assets from '../assets/assets'
import ToggleBtn from './ToggleBtn'

const Navbar = ({theme,setTheme}) => {

const [sideBarOpen,setSideBarOpen]=useState(false)


  return (
<div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-24 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

      <img src={theme === 'dark' ? assets.logo_dark : assets.logo}   alt="logo" className='w-12 sm:w-40' />


      <div className={`text-gray-700 dark:text-white sm:text-sm ${!sideBarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-[#6200de] max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5   transition-all duration-300`}>
        <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={()=>setSideBarOpen(false)}/>
   
        <a href="#" className='sm:hover:border-b ' onClick={()=>setSideBarOpen(false)}>Home</a>
        <a href="#services" className='sm:hover:border-b ' onClick={()=>setSideBarOpen(false)}>Services</a>
        <a href="#our-work" className='sm:hover:border-b ' onClick={()=>setSideBarOpen(false)}>Our Work</a>
        <a href="#contact" className='sm:hover:border-b ' onClick={()=>setSideBarOpen(false)}>Contact Us</a>
      </div>

 <div className='flex items-center gap-2 sm:gap-4'>
     <ToggleBtn theme={theme} setTheme={setTheme}/>

<img src={theme=== "dark" ? assets.menu_icon_dark :assets.menu_icon} alt=""  onClick={()=>setSideBarOpen(true)} className='w-8 sm:hidden' />

    <a href="#contact" className='text-sm max-sm:hidden flex items-center gap-2 bg-[#6200de] text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>Connect 
        <img src={assets.arrow_icon} width={14} alt="" />
    </a>
</div> 

    </div>
  )
}

export default Navbar
