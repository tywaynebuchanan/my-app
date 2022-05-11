import React,{useState} from 'react'
import {MenuIcon,XIcon} from '@heroicons/react/outline'

const Navbar = () => {

    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-50 fixed drop-shadow-g">
        <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Logo</h1>
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Support</li>
                <li>Platforms</li>
            </ul>
        </div>
        <div className = 'hidden md:flex pr-4'>
            <button className='mr-4'>Sign In</button>
            <button>Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
        
        </div>
        </div>
        <ul className={!nav ? 'hidden': 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-zinc-300 w-full'>Contact</li>
                <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
            <div className = 'flex flex-col my-4'>
                <button className='mb-4'>Sign In</button>
                <button>Sign Up</button>
            </div>
        </ul>
        
    </div>

    


  )
}

export default Navbar