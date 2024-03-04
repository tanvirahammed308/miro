import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Collaborate = () => {
  return (
    <div className='my-10'>
        <h2 className='font-bold text-3xl text-center '>
Collaborate without

constraints

</h2>
<div className='flex flex-col md:flex-row gap-10 mx-20 mt-5'>
    <div className='w-[314px] h-[144px]'>
        <h2 className='font-bold'>Free forever</h2>
        <p><small>
        Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our 
pricing plans for more features.</small></p>
    </div>
    <div  className='w-[314px] h-[144px]'>
    <h2 className='font-bold'>Easy integrations</h2>
        <p><small>
        Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our Marketplace .</small></p>
    </div>
    <div  className='w-[314px] h-[144px]'>
    <h2 className='font-bold'>Security first</h2>
        <p><small>
        We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more 
at our Trust Center .</small></p>
    </div>
</div>
<div className=' mx-96'>
<button className='flex relative '>
<input type="button" value="Sign up free" className='mt-3 border w-[440px] h-[48px] rounded-md  bg-[#4262FF] text-white mt'  />
<FaArrowRightLong  className='absolute top-7 right-[1000px] text-white'/>
</button>
</div>

    </div>
  )
}

export default Collaborate