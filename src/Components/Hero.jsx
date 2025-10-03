import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-24 px-4  sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white min-h-[calc(100vh-64px)]  dark:bg-[#4c4c4c] transition-colors duration-300'>
      
<div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
    <img src={assets.group_profile} alt="" />
    <p className='text-xs font-medium'>Trusted by 10k+ people</p>
</div>

<h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Turning imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>Digital</span> impact.</h1>

<p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3 '>Creating meaningfull connections and turning big idea into interactive digital experiences</p>

<div className='relative'>
    <img src={assets.hero_img} alt="" className='w-full max-w-6xl' />
    <img src={assets.bgImage1} alt="" className='absolute -top-90 -right-190 sm:-top-10 sm:right-70 -z-1 dark:hidden' />
</div>

    </div>
  )
}

export default Hero
