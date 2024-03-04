import React from 'react'
import wo from '../../public/img/wo.png'
import { NavLink } from 'react-router-dom'
import { MdChevronRight } from 'react-icons/md'

const ConnectYour = () => {
  return (
    <div className='my-10 mx-5 flex flex-col md:flex-row items-center gap-10'>
        <div>
            <img src={
            wo
            } alt="" />
        </div>
        <div className='w-[550px] h-[270px]'>
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
        
    </div>
    
  )
}

export default ConnectYour