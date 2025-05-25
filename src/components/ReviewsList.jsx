
import Stars from './Stars'
import { ReviewContext } from './ReviewProvider'
import RemoveButton from './RemoveButton'
import React, { useCallback, useContext } from 'react'


function ReviewsList({ setIsAdd, setOpenWindow, setIsEdit, setUserId }) {
  const { state, ids } = useContext(ReviewContext)
  const handleOpenEditForm = useCallback(
    (id) => {
      setUserId(id)
      setIsEdit(true)
      setOpenWindow(true)
      setIsAdd(false)
    }
    , [])
  return (
    <div className='space-y-2  self-start'>
      {state.map((item) => (
        <div
          className='border-2 border-slate-900 w-full bg-[#b9331a] p-2 lg:m-3  lg:w-[500px] rounded-lg'
          key={item.reviewId}
        >
          <p><span className='font-bold'>Name:</span> {item.name}</p>
          <textarea
            readOnly
            className=' w-full mt-1 rounded-md'
            value={item.comment}
          // بدل id نستخدم value readonly لعرض التعليق فقط
          />
          <Stars numberOfStars={item.numberofStars} />
          {ids.includes(item.reviewId) && (
            <div className='flex space-x-1'>
              <button
                className='bg-slate-200 mt-2 p-1 w-16 rounded-lg hover:bg-slate-300'
                onClick={() => handleOpenEditForm(item.reviewId)}
              >
                Edit
              </button>
              <RemoveButton id={item.reviewId} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
export default React.memo(ReviewsList) 