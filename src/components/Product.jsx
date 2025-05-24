import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ContextApp } from './ContaxtProducts'
import { useParams } from 'react-router-dom'
import Stars from './Stars'

function Product({ setOpenWindow, setIsAdd, setIsEdit }) {
  const { post } = useContext(ContextApp)
  const { id } = useParams()
  const [product, setProduct] = useState(null)


  const handelOpenForm = useCallback(() => {
    setOpenWindow(true)
    setIsAdd(true)
    setIsEdit(false)
  }, [])


  useEffect(() => {
    if (post.length > 0) {
      const choosenProduct = post.find((item) => (item.id === Number(id)))
      setProduct(choosenProduct)
    }
  }, [post, id])
  return (
    <>
      {product && <section className='flex flex-col lg:flex-row mt-44  gap-10  items-center lg:h-[550px] w-full lg:w-[80%] m-auto'>
        <div className='w-[80%] lg:w-[35%] m-auto flex justify-center items-center flex-col space-y-2  h-[90%]'>
          <div className=' h-[80%] w-[80%] lg:w-full ' >
            <img className='object-contain rounded-2xl w-full h-full' src={product.image} alt="photo" />
          </div>
          <div className='flex items-center space-x-2'>
            <Stars numberOfStars={product.rating.rate} />
            <p className='text-red-color'>count: {product.rating.count}</p>
          </div>
        </div>
        <div className='flex flex-col  w-[90%] mb-6 lg:w-[65%] space-y-2'>
          <span className='text-gray-400 text-base '>{product.category}</span>
          <h2 className='text-rose-color font-bold text-[30px]'>{product.title}</h2>
          <p className='text-gray-400 text-base '>{product.description}</p>
          <span className='text-rose-color font-bold text-[20px]'>{product.price}$ </span>
          <span className='text-gray-400 text-base '>{product.price}$ </span>
          <div className='flex space-x-1 pt-5 transition-all duration-300'>
            <button className=' w-52 h-10  bg-slate-50 hover:text-rose-color hover:bg-[#de4c33ec]  flex justify-center items-center space-x-2 rounded-md  p-1 shadow-[0px_0px_5px_#b9331a] font-medium ' onClick={handelOpenForm}
            >
              Add review
            </button>
            <button className=' w-52 h-10  bg-slate-50 hover:text-rose-color hover:bg-[#de4c33ec]  flex justify-center items-center space-x-2 rounded-md  p-1 shadow-[0px_0px_5px_#b9331a] font-medium '>
              <img className='w-8 h-8 ' src="..\src\assets\icon-add-to-cart.svg" alt="photo" />
              Add to cart
            </button>

          </div>

        </div>
      </section>}
    </>
  )
}
export default React.memo(Product) 