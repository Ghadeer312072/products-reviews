import React, { useContext, useState, useEffect, useCallback } from 'react'
import { ReviewContext } from './ReviewProvider'
import { IoMdClose } from 'react-icons/io'
import AddStarsReview from './AddStarsReview'

function ReviewForm({ isAdd, isEdit, userId, setOpenWindow }) {
  const { addPress, editPress, state } = useContext(ReviewContext)
  const [numberOfStars, setNumberOfStars] = useState(0)
  const [userName, setUserName] = useState("")
  const [userComment, setUserComment] = useState("")

  // useEffect لتعبئة الحقول عند فتح نافذة التعديل أو تغير userId
  useEffect(() => {
    if (isEdit && userId !== null && userId !== undefined) {
      const editItem = state.find(item => item.reviewId === userId)
      if (editItem) {
        setUserName(editItem.name)
        setUserComment(editItem.comment)
        setNumberOfStars(editItem.numberofStars)
      }
    } else {
      // إذا كانت إضافة جديدة، نعيد تعيين الحقول
      resetForm()
    }
  }, [isEdit, userId, state])

  const resetForm = () => {
    setUserName('')
    setUserComment('')
    setNumberOfStars(0)
  }

  // تعديل بيانات المراجعة
  const EditStore = useCallback(() => {
    editPress(numberOfStars, userName, userComment, userId)
    resetForm()
    setOpenWindow(false)
  }, [editPress, setOpenWindow, numberOfStars, userName, userComment, userId])

  // إضافة مراجعة جديدة
  const AddToStore = useCallback(
    (e) => {
      e.preventDefault()
      addPress(numberOfStars, userName, userComment)
      resetForm()
      setOpenWindow(false)
    }, [addPress, numberOfStars, userName, userComment])

  const handleClose = () => {
    setOpenWindow(false)
    resetForm()
  }

  return (
    <form
      className='w-[90%] md:w-[50%] relative p-5 bg-white rounded-lg shadow-lg m-auto mt-[10%]'
    >
      <button
        className='absolute top-3 right-3'
        onClick={handleClose}
        type='button'
      >
        <IoMdClose size={24} color="gray" />
      </button>

      <h2 className='text-xl font-semibold mb-4'>Review</h2>

      <AddStarsReview setnuberOfstars={setNumberOfStars} />

      <input
        required
        type="text"
        placeholder='Enter your name'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className='w-full mb-3 p-2 rounded border'
      />

      <textarea
        required
        placeholder='Enter your comment'
        value={userComment}
        onChange={(e) => setUserComment(e.target.value)}
        className='w-full mb-3 p-2 rounded border'
      />

      <div className='flex space-x-3'>
        {isAdd && (
          <button
            type="submit"
            className='bg-green-500 text-white px-4 py-2 rounded cursor-pointer'
            onClick={AddToStore}
          >Add</button>
        )}
        {isEdit && (
          <button
            type="button"
            onClick={EditStore}
            className='bg-blue-500 text-white px-4 py-2 rounded'
          >
            Edit
          </button>
        )}
      </div>
    </form>
  )
}
export default React.memo(ReviewForm) 