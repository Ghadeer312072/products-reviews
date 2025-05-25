import React from 'react'
import ProductCard from './ProductCard'

function ProductsList({ partOfDataArray }) {
  return (
    <section className=' w-[50%] m-auto  md:w-[65%] h-[2400px] md:h-[800px] mt-1  grid grid-cols-1 gap-y-12 md:grid-cols-3'>
      {partOfDataArray.map((item) => {
        return (
          <ProductCard
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating.rate}
            id={item.id}
            key={item.id}
          />
        )
      })}
    </section>
  )
}
export default React.memo(ProductsList)