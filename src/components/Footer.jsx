import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-[#02033B]  md:w-[1,440px] md:h-[640px] '>
            <div className='flex  flex-col  md:flex-row justify-between md:py-36 md:mx-auto md:container mx-5'>
            <div>
                <h2 className='text-white'>Scan. Detect. Remove.</h2>
                <div className=''>
                    <div className='flex space-x-4 mt-5 mb-5'>
                    <FaTwitter className=' border bg-white' size={25} 	/>
                <FaFacebookF className=' border bg-white' size={25}  />
                <FaYoutube  className=' border bg-white' size={25}  />
                    </div>
                
                <div className='text-white '>
                    <div className='flex gap-5 underline'>
                    <p>
                        <small>
                        Privacy Policy
                        </small>
                    </p>
                    <p>
                        <small>
                        Terms of Service
                        </small>
                    </p>
                    </div>
                    
                    <p className='mt-10 w-60'>
                        <small>
                        Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356
                        </small>
                    </p>
                    <p className='mt-5'>
                        <small>Designed & developed by Bigger Picture</small>
                    </p>
                </div>



                </div>
            </div>

            {/* mddle */}
            <div className=''>
                <h2 className='text-[#FFFFFF] font-bold text-2xl underline underline-offset-8'>Miro.</h2>
                <div className='mt-5'>
                <div className='text-[#FFC247]'>
                <div className='flex items-center gap-4'>
                    <div className='border-t-4

w-[20px] border-[#FFC247] '></div>
                    <div>iPhone</div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='border-t-4

w-[20px] border-[#FFC247] '></div>
                    <div>Android</div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='border-t-4

w-[20px] border-[#FFC247] '></div>
                    <div>Help</div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='border-t-4

w-[20px] border-[#FFC247] '></div>
                    <div>About</div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='border-t-4

w-[20px] border-[#FFC247] '></div>
                    <div>Insights</div>
                </div>

                </div>
                </div>
                
                
            </div>
            
            {/* last */}
            <div className='bg-[#FFC247] w-full md:w-[30%] p-8 rounded-md'>
                <h2 className='font-bold'>Sign up to our newsletter</h2>
                <p>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                <form action="">
                    <input type="text" name="" id=""  className='rounded-md'/>
                    <input type="button" value="Submit" className='bg-[#02033B] text-white px-2 rounded-md'/>
                </form>
            </div>
            
            
            </div>
            <div className='text-white w-[400px] h-[40px] md:w-[545px] md:h-[45px] mx-5'>
                <p><small>
                Apple, the Apple logo, and iPhone are trademarks of Apple Inc., 
                registered in the U.S. and other countries.
                 App Store is a service mark of Apple Inc. Android,
                  Google Play and the Google Play logo are trademarks of Google LLC.
                    
                    </small></p>
            </div>
            
            

    </div>
  )
}

export default Footer