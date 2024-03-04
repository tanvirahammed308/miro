import React from 'react'
import wa from "../../public/img/wa.svg.png"
import ci from "../../public/img/ci.svg.png"
import vo from "../../public/img/vo.svg.png"
import de from "../../public/img/de.svg.png"
import ok from "../../public/img/ok.svg.png"

const Trustedby = () => {
  return (
    <div className='mx-5 my-5'>
        <h6 className='text-center text-black mb-5'>
        Trusted by 45M+ users
        </h6>
        <div className='flex flex-col md:flex-row items-center gap-10 mx-32'>
            <img src={wa} alt="" />
            <img src={ci} alt="" />
            <img src={vo} alt="" />
            <img src={de} alt="" />
            <img src={ok} alt="" />
        </div>
    </div>
  )
}

export default Trustedby