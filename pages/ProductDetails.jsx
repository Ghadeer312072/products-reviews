import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { ContextApp } from '../src/components/ContaxtProducts'

import Header from '../src/components/Header'
import Stars from '../src/components/Stars'
import ReviewForm from '../src/components/ReviewForm'
import ReviewsList from '../src/components/ReviewsList'
import ReviewProvider from '../src/components/ReviewProvider'
import Product from '../src/components/Product'
import SkeletonForDetails from '../src/components/SkeletonForDetails'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function ProductDetails() {

  const { loading, error, reload } = useContext(ContextApp)


  const [OpenWindow, setOpenWindow] = useState(false)
  const [isAdd, setIsAdd] = useState(false)
  const overlayRef = useRef()
  const [isEdit, setIsEdit] = useState(false)
  const [userId, setUserId] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (OpenWindow && (isAdd || isEdit)) {
      overlay.classList.replace("hidden", "block");
    } else {
      overlay.classList.replace("block", "hidden");
    }
  }, [OpenWindow, isAdd, isEdit]);
  const goBack = useCallback(() => {
    navigate(-1)
  }, [])

  return (
    <>
      <Header />

      <main className='relative mt-[100px] mb-[50px] h-auto'>
        {
          loading ? (
            <SkeletonForDetails />
          ) : error ? (
            <>
              <div>try agin...</div>
              <button onClick={reload}>reload</button>
            </>
          ) :
            <>
              <button onClick={goBack} className='absolute bg-[#f5f2f2] p-1 flex right-10 text-blue-500'>  <FiArrowLeft size={24} />back</button>
              <Product
                setOpenWindow={setOpenWindow}
                setIsAdd={setIsAdd}
                setIsEdit={setIsEdit}
              />
              <hr />

              <div className='h-auto w-[90%] m-auto lg:w-[60%] lg:ml-10 rounded-xl p-3  mt-16 flex justify-evenly items-center' >
                <div className='w-full md:w-[500px]  lg:w-[600px] '>
                  <h2 className='text-roze-color pl-3 text-[30px]'>All Reviews</h2>

                  <ReviewsList
                    setOpenWindow={setOpenWindow}
                    setIsEdit={setIsEdit}
                    setUserId={setUserId}
                    setIsAdd={setIsAdd} />

                </div>

              </div>
              {(OpenWindow && (isAdd || isEdit)) && (
                <div ref={overlayRef} className='overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                  <ReviewForm
                    setOpenWindow={setOpenWindow}
                    isAdd={isAdd}
                    isEdit={isEdit}
                    userId={userId}

                  />
                </div>
              )}

            </>

        }

      </main >

    </>
  )
}
