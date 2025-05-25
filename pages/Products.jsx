import React, { useContext, useEffect, useMemo, useState } from 'react'
import Search from '../src/components/Search'
import Filter from '../src/components/Filter'
import Pagination from '../src/components/Pagination'
import ProductsList from '../src/components/ProductsList'
import { ContextApp } from '../src/components/ContaxtProducts'
import Header from '../src/components/Header'
import SkeletonForProducts from '../src/components/SkeletonForProducts'
import { useLocation } from 'react-router-dom'


export default function Products() {
  const { loading, post, error, reload } = useContext(ContextApp);
  const [filteredData, setFilteredData] = useState(null)
  const listSize = 6
  const displayedData = filteredData || post || null
  const [CurrentPage, setCurrentPage] = useState(0)
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const currentItems = useMemo(() => {
    if (displayedData.length < 6) return displayedData;
    const firstIndex = (CurrentPage) * listSize
    return displayedData.slice(firstIndex, firstIndex + listSize)

  }, [CurrentPage, displayedData])





  return (
    <>
      <Header />
      <section className='h-auto  w-[90%] m-auto'>
        <div>
          {loading ? (
            <SkeletonForProducts />
          ) : error ? (
            <>
              <div>{error} try agin</div>
              <button onClick={reload}>reload</button>
            </>
          ) : (
            <div className=' ' >
              <div>
                <Search setSearchArray={setFilteredData} />
                <Filter setFilterArray={setFilteredData} />
              </div>

              <Pagination
                setCurrentPage={setCurrentPage}
                sizeOfList={listSize}
                lengthOfData={displayedData.length}
              />
              <ProductsList partOfDataArray={currentItems} />
            </div>
          )
          }
        </div>
      </section>

    </>

  )
}
