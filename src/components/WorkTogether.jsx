import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import workto from '../../public/img/workto.png'

const WorkTogether = () => {
  return (
    <div className='my-10 mx-5 flex flex-col md:flex-row items-center gap-10'>
        <div className='w-[350px] md:w-[550px] md:h-[270px]'>
        <h2 className='font-bold text-4xl text-[#050038]'>Work together, wherever you work</h2>
<p className='my-5'>
In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
</p>
<NavLink
                className='flex items-center  text-[#4262FF] underline'
  to="/"
 
>Learn more
<MdChevronRight />

 
</NavLink>
        </div>
        <div>
            <img src={
                workto
            } alt="" />
        </div>
    </div>
  )
}

export default WorkTogether