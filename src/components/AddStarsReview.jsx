import React, { useCallback, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

function AddStarsReview({ setnuberOfstars }) {
  const [selected, setSelected] = useState(0)
  const handleClick = useCallback((number) => {
    setnuberOfstars(number)
    setSelected(number)
  }, [setnuberOfstars])
  return (
    <div>
      {
        [1, 2, 3, 4, 5].map((item, index) => (
          <button key={index} onClick={(e) => { e.preventDefault(); handleClick(item) }}>
            {item <= selected ? <FaStar color="gold" /> : <FaRegStar />}
          </button>
        ))

      }
    </div>
  )
}
export default React.memo(AddStarsReview) 