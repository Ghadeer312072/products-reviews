import React from 'react'

export default function SkeletonForProducts() {
  return (

    <div className='w-[50%] bg-white m-auto mt-[200px]  md:w-[65%] h-[2400px] md:h-[800px]   grid grid-cols-1 gap-y-6 md:grid-cols-3'>
      {Array.from({ length: 6 }).map((item, index) => {
        return <div key={index} className='relative bg-gray-100 transition duration-300 h-[350px] w-[250px] rounded-xl hover:border-b-[#b9331a] ml-2' >
          <div className='.skeleton-glow bg-neutral-200 w-[100%] rounded-xl h-[60%] m-auto'>
            <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine"></span>
          </div>
          <div className='relative w-[90%] mt-12 m-auto'>
            <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine"></span>
            <div className='relative w-full h-[40%]  bg-gray-100 '>
              <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine"></span>
            </div>
          </div>
        </div>
      })}
    </div>

  )
}
