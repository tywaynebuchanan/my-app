import React,{useState} from 'react'
import Smiling from '../assets/images/smiling.svg'
import Button from './Button'
import {CubeIcon,DatabaseIcon} from '@heroicons/react/solid'


const Navbar = () => {

    
  return (
    <div className='border-b-2 w-full'>
        <div className='md:flex items-center justify-between bg-white py-4 px-16'>
            <div className = 'font-700 text-xl cursor-pointer flex items-center'>
                <span>
                    <img src={Smiling} alt="Smiling Emoji" className='md:mr-2 w-7'/>
                </span>
                <p>Leotis Page</p>
            </div>
            
            <ul className = "md:flex md:items-center">
                <li className = "md:ml-8 flex cursor-pointer"><CubeIcon className='h-6 fill-gray-200 '/>Models</li>
                <li className = "md:ml-8 flex cursor-pointer"><DatabaseIcon className='h-6 fill-gray-200 '/>DataSet</li>
                <li className = "md:ml-8 flex cursor-pointer">Spaces</li>
                <li className = "md:ml-8 flex cursor-pointer">Docs</li>
                <li className = "md:ml-8 flex cursor-pointer">Solutions</li>
                <li className = "md:ml-8 flex cursor-pointer">Pricing</li>
                
            </ul>
            <div className = "md:flex md:items-center">
                <ul>
                <li className = "md:ml-8 cursor-pointer">Log In</li>
                </ul>
                <Button></Button>
            </div>
           
        </div>
        
    </div>

    


  )
}

export default Navbar