import React from 'react'
import {
    CloudUploadIcon,DatabaseIcon,PaperAirplaneIcon,ServerIcon
} from '@heroicons/react/solid'
import bgImg from '../assets/images/cyber-bg.png'

const Hero = () => {
  return (
    <div className = "w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <p className='text-2xl'>Leotis Programming Company</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>Leotis Works</h1>
            <p className='text-2xl'>This is his brand</p>
            <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>

            <div>
                <img src={bgImg} className = "w-full" alt="Computer" />
            </div>

            <div className ='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border
             border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className = "flex px-4 py-2"><CloudUploadIcon className = "h-4 text-blue-500"/>Data Services</p>
                    <p className = "flex px-4 py-2"><CloudUploadIcon className = "h-4 text-blue-500"/>Data Services</p>
                    <p className = "flex px-4 py-2"><CloudUploadIcon className = "h-4 text-blue-500"/>Data Services</p>
                    <p className = "flex px-4 py-2"><CloudUploadIcon className = "h-4 text-blue-500"/>Data Services</p>
                </div>
            </div>  
           
        </div>

    </div>
  )
}

export default Hero