import React, { useCallback, useContext } from 'react'
import { ReviewContext } from './ReviewProvider'

function RemoveButton({ id }) {
  const { removePrees } = useContext(ReviewContext)
  const hundelRemove = useCallback(() => {
    removePrees(id)
  }, [id])
  return (
    <div>
      <button className='bg-slate-200 mt-2 p-1 w-16 rounded-lg  hover:bg-slate-300' onClick={hundelRemove}>Remove</button>
    </div>
  )
}
export default React.memo(RemoveButton) 