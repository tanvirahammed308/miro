import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { MdChevronRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { MdStarHalf } from "react-icons/md";
import hero from "../../public/img/hero-left.png"




const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row my-8 mx-4 gap-5'>
{/* righr side  */}
        <div>
<h2 className='font-bold text-4xl text-[#050038
]'>Take ideas from better to best</h2>
<p className='my-5'>
Miro is your team's visual platform to connect, collaborate, and create — together.
</p>
<form action="" className='flex flex-col'>
    <input type="email" name="" id=""  placeholder='Enter your work email' className='border w-[440px] h-[48px] rounded-md text-[#9B99AF
]' />
<button className='flex relative'>
<input type="button" value="Sign up free" className='mt-3 border w-[440px] h-[48px] rounded-md  bg-[#4262FF] text-white mt'  />
<FaArrowRightLong  className='absolute top-7 right-[1000px] text-white'/>
</button>




</form>
<p><small>
Collaborate with your team within minutes</small></p>
<div className='bg-[#F5F5F7] w-[350px] h-[80px] p-2 rounded-md'>
    <div className='flex items-center'>
        <div >
            <div className='flex items-center'>
            <FaStar className='text-[#FF9D48]'/>
    <FaStar className='text-[#FF9D48]'/>
    <FaStar  className='text-[#FF9D48]'/>
    <FaStar  className='text-[#FF9D48]'/>
    <MdStarHalf className='text-[#FF9D48]'/>
    
            </div>
            <div>
        <p><small>
    Based on 5149+ reviews:</small></p>
        </div>
        
        </div>
       
        
    <div className='flex gap-2 ml-5'>
        <h2>GetApp</h2>
        <h2>Capterra</h2>
    </div>
    
    

    </div>
    


</div>
        </div>
        {/* left side  */}
        <div>
            <img src={hero} alt="" />

        </div>
    </div>
  )
}

export default Hero