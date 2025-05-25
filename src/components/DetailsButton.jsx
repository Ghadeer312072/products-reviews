import React from 'react'
import { useNavigate } from 'react-router-dom'

function DetailsButton({ ItemsId }) {
  const navigate = useNavigate()
  const gotoDetailsPage = () => {
    navigate(`details/${ItemsId}`)
  }

  return (

    <button onClick={gotoDetailsPage} className='absolute z-30 h-10 w-40 m-auto mb-4 left-[50%] -top-16  translate-x-[-50%]  bg-slate-50 hover:text-rose-color hover:bg-[#f3beb4] flex justify-center items-center space-x-2 rounded-full  p-1 shadow-[0px_0px_5px_#b9331a]  '>

      <span className='text-rose-color font-semibold text-[14px] '>More Details</span>
    </button>

  )
}
export default React.memo(DetailsButton) 