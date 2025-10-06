import { serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-20 scroll mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I offer a range of services to help you achieve your goals.</p>

        <div className='grid grid-cols-4 gap-6 my-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
            {serviceData.map(({icon,title,description,link}, index)=>(
                <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_rgba(0,0,0)] curser-pointer hover:bg-green-700 hover:-translate-y-2 duration-500 hover:text-white-700 hover:text-white'>
                    <Image src={icon}   alt='' className='w-10 mb-4'/>
                    <h3 className='text-lg my-4 text-white-700 '>{title}</h3>
                    <p className='text-sm text-white-700 leading'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt='' className='w-4' /></a>
                </div>

            ))}

            
        </div>
    </div>
  )
}

export default Services
