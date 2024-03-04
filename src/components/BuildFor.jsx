import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import div from '../../public/img/div.png'

const BuildFor = () => {
  return (
    <div className='my-10 mx-20'>
        <h2 className='font-bold text-3xl'>
        Built for the way you work
        
        </h2>
        <div className='mt-3 space-x-3 space-y-3'>
            <button className='bg-[#F1F3FD] p-2 rounded'>Brainstorming</button>
            <button className='bg-[#F1F3FD] p-2 rounded'>Diagramming</button>
            <button className='bg-[#F1F3FD] p-2 rounded'>Meetings & Workshops</button>
            <button className='bg-[#F1F3FD] p-2 rounded'>Scrum Events</button>
            <button className='bg-[#F1F3FD] p-2 rounded'>Mapping</button>
            <button className='bg-[#F1F3FD] p-2 rounded'>Research & Design</button>
            <button className='bg-[#F1F3FD] p-2 rounded'>Strategic Planning</button>
            </div>
            <div className='mt-5 flex flex-col md:flex-row gap-2 items-center'>
                <div className='w-[360px] h-[250px]'>
                <h2 className='font-bold text-4xl text-[#050038]'>Brainstorming</h2>
<p className='my-5'>
Unleash creative ideas and build on them with the help of sticky notes,
 images, mind maps, videos, drawing capabilities — the list goes on.
</p>
<NavLink
                className='flex items-center  text-[#4262FF] '
  to="/"
 
>Learn more
<MdChevronRight />

 
</NavLink>
                </div>
                <div className='w-[700px] h-[517px]'>
                    <img src={div} alt="" />

                </div>
            </div>
            
            
            </div>
  )
}

export default BuildFor