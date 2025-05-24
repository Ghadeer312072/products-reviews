import React from 'react'
import Stars from './Stars'
import DetailsButton from './DetailsButton'

function ProductCard({ title, image, price, rating, id }) {


  return (
    <section className='
    bg-transparent border-2 transition duration-300 border-gray-100  h-[350px] w-[250px] rounded-xl hover:border-b-[#b9331a] ml-2'>
      <div className='bg-neutral-300 w-[100%] rounded-xl h-[60%] m-auto'>
        <img className='rounded-2xl w-full h-full' src={image} alt="photo" />
      </div>
      <div className='relative w-[90%] mt-12 m-auto'>
        <DetailsButton ItemsId={id} />
        <div className='flex flex-col gap-2   '>
          <h2 className='truncate'>{title}</h2>
          <span className='text-red-color'>{price}$</span>
          <Stars numberOfStars={rating} />
        </div>
      </div>
    </section>
  )
}
export default React.memo(ProductCard) 