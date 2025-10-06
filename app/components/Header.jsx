import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt="Profile Image" className="rounded-full w-32 mt-6" />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi I'm Hari Krishna <Image src={assets.hand_icon} alt="Hand Icon" className=" w-6" /></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>MERN Stack Developer</h1>
        <p className='max-w-2xl mx-auto font-Ovo'>I am a passionate MERN Stack Developer with expertise in building dynamic and responsive web applications. I love creating seamless user experiences and bringing ideas to life through code.</p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2' href="#contact">Contact me <Image src={assets.right_arrow_white} className='w-4' alt="Right Arrow Icon" /></a>
            <a href="/Hari-Krishna-Dasari-Resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My resume <Image src={assets.download_icon} className='w-4' alt="Download Icon" /></a>
        </div>
    
    </div>
  )
}

export default Header
