import React, { useContext, useEffect, useRef, useState } from 'react'
import { ContextApp } from './ContaxtProducts';

function Search({ setSearchArray }) {
  const { post } = useContext(ContextApp);
  const inputRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState("")
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchArray(null)
    } else {
      const filtered = post.filter((item) => (
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      ))
      setSearchArray(filtered)
    }

  }, [searchTerm])
  return (
    <div className='w-[60%]  m-auto '>

      <input onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        ref={inputRef} type="text" placeholder='Search by title'
        className='outline-0 h-8 p-2 border mt-40 border-rose-color w-[100%]  md:w-[50%] rounded-2xl' />
    </div>
  )
}
export default React.memo(Search) 