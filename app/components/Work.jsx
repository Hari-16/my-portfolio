import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-20 scroll mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Here are some of the projects I've worked on recently.</p>

        <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 my-10 gap-5'>
            {workData.map((project, index)=>(
                <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}}>
                    
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex item-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                        <h3 className='font-semibold text-gray-700'>{project.title}</h3>
                        <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black h-10 w-10 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                            <a href={project.url} target="_blank" rel="noopener noreferrer"><Image src={assets.send_icon} alt='send icon' className='w-5'/></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

            <a href="" className='w-max flex items-center justify-center gap-2 text-white-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-green-700 duration-500'>
                show more <Image src={assets.right_arrow_bold} alt="Right Arrow" className='w-4'/>
            </a>

    </div>
  )
}

export default Work
