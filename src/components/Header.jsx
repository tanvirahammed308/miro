import React from 'react'
import { NavLink } from 'react-router-dom';
import "tailwindcss/tailwind.css";
import { GoChevronDown } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { MdChevronRight } from "react-icons/md";



export const Header = () => {
  return (
    <div className='text-bold uppercase text-black flex justify-between flex-row items-center mx-5 border-b p-5'>
        <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>miro</h2>
      
            <ul className='flex space-x-5 '>
                <li className='ml-2'>
                <NavLink className='flex text-center items-center'
  to="/"
 
>product
<GoChevronDown />

 
</NavLink>
                    
                </li>
                <li>
                <NavLink
                 className='flex text-center items-center'
  to="/"
 
>Solutions
<GoChevronDown />

 
</NavLink>

                </li>
                <li>
                <NavLink
                 className='flex text-center items-center'
  to="/"
 
>Resources
<GoChevronDown />

 
</NavLink>

                </li>
                <li>
                <NavLink
  to="/"
 
>Enterprise
 
</NavLink>
                </li>
                <li>
                <NavLink
                 
  to="/"
 
>Pricing
 
</NavLink>

                </li>
            </ul>
        
        
       
        

        
       

        </div>
       
        <div>
            <ul className='flex space-x-3 items-center'>
                <li className='flex items-center'>
                <TbWorld />
        <h2>EN</h2>
                    
                </li>
                <li>
                <NavLink
  to="/"
 
>Contact Sales
 
</NavLink>
                </li>
                <li>
                <NavLink
  to="/"
 
>Login
 
</NavLink>
                </li>
                <li>
                <NavLink
                className='flex items-center'
  to="/"
 
>Sign up free 
<MdChevronRight />

 
</NavLink>
                    
                </li>
            </ul>
            
        
       
        
        
        


        </div>
    </div>
  )
}
