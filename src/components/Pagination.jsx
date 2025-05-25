import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Pagination({ setCurrentPage, sizeOfList, lengthOfData }) {
  const numberOfSteps = [];
  for (let i = 1; i <= Math.ceil(lengthOfData / sizeOfList); i++) {
    numberOfSteps.push(i)
  }

  const goRight = () => {
    setCurrentPage((index) => (index + 1) % numberOfSteps.length)
  }
  const goLeft = () => {
    setCurrentPage((index) => (index - 1 + numberOfSteps.length) % numberOfSteps.length)
  }


  return (
    <div className='bg-transparent absolute z-20 top-[500px] md:top-[650px] text-[#b9331a] left-[50%]   translate-x-[-50%] flex justify-between w-full md:w-[90%]  text-[50px] '>
      <button className=' rounded-full md:border w-24 h-24 hover:text-blue-500 flex justify-center items-center' onClick={goRight}>
        <FaChevronLeft />
      </button>
      <button className=' rounded-full md:border w-24 h-24 hover:text-blue-500 flex justify-center items-center' onClick={goLeft}>
        <FaChevronRight />

      </button>
    </div>
  )
}
export default React.memo(Pagination)