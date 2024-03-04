import React from 'react'
import l1 from '../../public/img/l1.png'
import l2 from '../../public/img/l2.png'
import l3 from '../../public/img/l3.png'
import mas1 from '../../public/img/mas1.png'
import mas2 from '../../public/img/mas2.png'
import mas3 from '../../public/img/mas3.png'

const LoveBy = () => {
  return (
    <div className='my-10 mx-8'>
        <h2 className='text-[#050038] font-bold text-3xl text-center'>Loved by the world's best teams</h2>
        <div className='text-center mt-5 '>
        <button className='border border-blue-300 p-2 rounded-md text-blue-400 '>See all customer stories →</button>

        </div>
        <div className='flex flex-col md:flex-row gap-7 items-center'>
            <div className='w-[360px] h-[250px] mt-7'>
                <img src={l1} alt="" />
                <p>
                    <small>
                    “When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”
                    </small>
                </p>
                <div className='flex gap-3 mt-5'>
                    <img src={mas1} alt="" />
                    <div>
                        <h6>Roxanne Mustafa</h6>
                        <h6>Design Team Lead at VMware</h6>
                    </div>
                </div>

            </div>
            <div className='w-[360px] h-[250px] mt-8'>
                <img src={l2} alt="" />
                <p>
                    <small>
                    “Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”ctivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”
                    </small>
                </p>
                <div className='flex gap-3 mt-5'>
                    <img src={mas2} alt="" />
                    <div>
                        <h6>Jane Ashley</h6>
                        <h6>Head of Design at DocuSign</h6>
                    </div>
                </div>

            </div>
            <div className='w-[360px] h-[250px] mt-8'>
                <img src={l3} alt="" />
                <p>
                    <small>
                    “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”                    </small>
                </p>
                <div className='flex gap-3 mt-5'>
                    <img src={mas3} alt="" />
                    <div>
                        <h6>Laura Baird</h6>
                        <h6>Associate Design Director at frog</h6>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default LoveBy