import React, { createContext, useCallback, useEffect, useMemo, useReducer, useState } from 'react'
export const ReviewContext = createContext()
export default function ReviewProvider({ children }) {
  const [countId, setCountId] = useState(3)
  const [ids, setIds] = useState(() => {
    const storage = sessionStorage.getItem("ids")
    return storage ? JSON.parse(storage) : []
  })
  useEffect(() => {
    sessionStorage.setItem("ids", JSON.stringify([...ids]))
  }, [ids])


  const initailState = [
    {
      reviewId: 0,
      numberofStars: 3,
      name: "Ahmed alseed",
      comment: "it's good",
    },
    {
      reviewId: 1,
      numberofStars: 5,
      name: "Nour mohammed",
      comment: "it's very good",
    },
    {
      reviewId: 2,
      numberofStars: 5,
      name: "Rayan masaad",
      comment: "it's very good",
    },
  ]

  const reducer = (state, action) => {
    switch (action.type) {
      case "add": return [
        ...state,
        {
          reviewId: action.reviewId,
          numberofStars: action.numberofStars,
          name: action.name,
          comment: action.comment,
        },
      ];


      case "remove":

        return state.filter(item => item.reviewId !== action.reviewId);
      case "edit": return state.map(item => {
        if (item.reviewId == action.reviewId) {
          return {
            ...item,
            numberofStars: action.numberofStars,
            name: action.name,
            comment: action.comment,
          }
        }
        return item;
      });
      default: return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initailState);
  const addPress = useCallback((numberOfstars, name, comment) => {

    const newid = countId

    setIds(prev => [...prev, newid])
    dispatch({ type: "add", reviewId: newid, numberofStars: numberOfstars, name: name, comment: comment })
    setCountId(prev => prev + 1)

  }, [countId])
  const removePrees = useCallback((id) => {
    dispatch({ type: "remove", reviewId: id })
    setIds((prev) => prev.filter(item => item !== id))
  }, [])
  const editPress = useCallback((numberOfstars, name, comment, id) => {
    dispatch({ type: "edit", reviewId: id, numberofStars: numberOfstars, name: name, comment: comment })
  }, [])
  const value = useMemo(() => {
    return {
      addPress,
      removePrees,
      editPress,
      ids,
      state
    }
  }, [addPress, removePrees, editPress, ids, state])
  return (
    <ReviewContext.Provider value={value}>
      {children}
    </ReviewContext.Provider>
  )
}
