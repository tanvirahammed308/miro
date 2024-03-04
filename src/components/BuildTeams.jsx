import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import div2 from '../../public/img/div2.png'
import frame from '../../public/img/Frame.png'
import v1 from '../../public/img/v1.png'
import v2 from '../../public/img/v2.png'
import v3 from '../../public/img/v3.png'
import v4 from '../../public/img/v4.png'

const BuildTeams = () => {
  return (
    <div className='my-10 mx-20'>
        <h2 className='font-bold text-3xl'>
        Built for all kinds of teams
        
        </h2>
        <div className='mt-3 space-x-3 space-y-3'>
            <button className='bg-[#F1F3FD] p-2 rounded'>UX & Design</button>
            <button className='bg-[#F1F3FD] p-2 rounded'>Marketing</button>
            <button className='bg-[#F1F3FD] p-2 rounded'>Product Management</button>
            <button className='bg-[#F1F3FD] p-2 rounded'>Engineering</button>
            <button className='bg-[#F1F3FD] p-2 rounded'>Consultants</button>
            <button className='bg-[#F1F3FD] p-2 rounded'>Agile Coaches</button>
            <button className='bg-[#F1F3FD] p-2 rounded'>Sales</button>
            </div>
            <div className='mt-5 flex flex-col md:flex-row gap-2 items-center'>
                <div className='w-[360px] h-[250px]'>
                <div>
                  <div className='flex '>
                    <img src={frame} alt="" />
                    <h6>Build low-fi wireframes</h6>
                  </div>
                  <div className='flex '>
                    <img src={frame} alt="" />
                    <h6>Involve stakeholders in the design process</h6>
                  </div>
                  <div className='flex '>
                    <img src={frame} alt="" />
                    <h6>Run engaging design workshops</h6>
                  </div>
                </div>

<NavLink
                className='flex items-center  text-[#4262FF] mt-3'
  to="/"
 
>Learn more
<MdChevronRight />

 
</NavLink>
<div className='mt-10'>
    <h6>Integrate your favorite tools</h6>
    <div className='mt-2 items-center flex space-x-5'>
        <img src={v1} alt="" />
        <img src={v2} alt="" />
        <img src={v3} alt="" />
        <img src={v4} alt="" />

    </div>
</div>
                </div>
                <div className='w-[700px] h-[517px]'>
                    <img src={div2} alt="" />

                </div>
            </div>
            
            
            </div>
  )
}

export default BuildTeams