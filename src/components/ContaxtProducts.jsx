import axios from 'axios';
import React, { createContext, useCallback, useEffect, useMemo, useReducer } from 'react'
export const ContextApp = createContext()
export default function ContaxtProducts({ children }) {
  const initialState = {
    loading: true,
    post: [],
    error: "",
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case "success": return {
        loading: false,
        post: action.payLoad,
        error: ""
      };
      case "failed": return {
        loading: false,
        post: action.payLoad,
        error: "An error occurred while fetching data."
      };
      case "reload": return {
        ...state,
        loading: true,
        post: []
      };
      default: return state;
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState)


  const fetchData = () => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => dispatch({ type: "success", payLoad: response.data }))
      .catch(error => dispatch({ type: "failed", payLoad: error }))
  }


  console.log("المخزن")
  useEffect(() => {
    fetchData()
  }, [])


  const reload = useCallback(() => {
    dispatch({ type: "reload" });
    fetchData();
  }, []);


  const value = useMemo(() => ({
    ...state,
    reload
  }), [state, reload]);
  return (
    <div>
      <ContextApp.Provider value={value}>
        {children}
      </ContextApp.Provider>
    </div>
  )
}
