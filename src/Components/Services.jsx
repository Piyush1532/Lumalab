import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const Services = () => {

const servicesData=[
    {
        "title":"Advertising",
        "description":"We turn bold ideas into powerfull digital solutions that connect ,engage",
        icon:assets.ads_icon
    },
     {
        "title":"Content marketing ",
        "description":"We help you excute your plan and deliver results",
        icon:assets.marketing_icon
    },
        {
        "title":"Content writing ",
        "description":"We help you create a marketing strategy that drives results ",
        icon:assets.content_icon
    },
        {
        "title":"Social media ",
        "description":"We help you build a strong social media presence and engage with your audience ",
        icon:assets.social_icon
    }


]

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 xl:px-40 pt-30 text-gray-700 dark:text-white'>

      <img src={assets.bgImage2} alt="" className='absolute -top-70 -left-40 -z-1 dark:hidden'/>

<Title title={"How can we help?"} desc={"From strategy to execution ,we craft digit solution that move your business forward."}/>

<div className='flex flex-col md:grid grid-cols-2 '>
    {servicesData.map((service,index)=>(
        <ServiceCard key={index} service={service} index={index}/>
    ))}
</div>


    </motion.div>
  )
}

export default Services
