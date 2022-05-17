import React from 'react'


const Hero = () => {
  return (
    
    <div className='w-full h-screen bg-white flex flex-col justify-between'>
        <div className = "px-40 py-20 place-items-center h-screen">
        <div class="flex flex-wrap overflow-hidden xl:-mx-3">
            <div className="w-full overflow-hidden xl:my-3 xl:px-6 xl:w-1/4 bg-red-300 text-center
            rounded-lg shadow-lg py-20">
                Box 1
            </div>
            <div className="w-full overflow-hidden xl:my-3 xl:px-6 xl:w-1/4 bg-red-300 text-center
            rounded-lg shadow-lg py-20">
                Box 1
            </div>
            <div className="w-full overflow-hidden xl:my-3 xl:px-6 xl:w-1/4 bg-red-300 text-center
            rounded-lg shadow-lg py-20">
                Box 1 
            </div>
            <div className="w-full overflow-hidden xl:my-3 xl:px-6 xl:w-1/4 bg-red-300 text-center
            rounded-lg shadow-lg py-20">
                Box 1
            </div>

            </div>
        </div>
       
    </div>
  )
}

export default Hero