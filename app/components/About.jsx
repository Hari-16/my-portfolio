import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = ({isDarkMode}) => {
  return (
    <div id='about' className='w-full px-[12%] py-20 scroll mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

        <div className='flex w-full flex-col lg:flex-row gap-20 my-20 items-center'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.profile_img} alt="User Image" className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>
                Hello! I'm Hari Krishna, a dedicated MERN Stack Developer with a passion for creating dynamic and responsive web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, I specialize in building seamless user experiences and bringing ideas to life through code. My journey in web development has equipped me with the skills to tackle complex challenges and deliver high-quality solutions. I thrive in collaborative environments and am always eager to learn and grow in this ever-evolving field. Let's connect and create something amazing together!
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon,iconDark,title,description},index)=>(
                        <li className='border-[0.5px] border-white-400 rounded-xl p-6 cursor-pointer hover:-translate-y-2 duration-500 hover:bg-green-700 hover:shadow-[4px_4px_0_rgba(0,0,0)] lightHover:hover:shadow-white hover:text-white dat' key={index}>
                            <Image src={isDarkMode ? iconDark:icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-white-700'>{title}</h3>
                            <p className='text-white-700 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>
                <h4 className='my-6 text-white-700 font-Ovo'>Tools I Use</h4>
                <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool,index)=>(
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-2 duration-500' key={index}>
                            <Image src={tool} alt="Tool" className='w-5 sm:w-7'/>
                        </li>
                    ))}
                </ul>

            </div>
            
        </div>
    </div>
  )
}

export default About
