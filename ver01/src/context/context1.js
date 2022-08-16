import React, { useContext, useEffect, useReducer } from 'react'

const initialState = {
  isSidebarOpen: true,
}

const reducer = (state, action) => {
  if (action.type === "SIDEBAR_OPEN") {
    return {...state, isSidebarOpen:true}
  }
  if (action.type === "SIDEBAR_CLOSE") {
    return {...state, isSidebarOpen:false}
  }
}

const OneContext = React.createContext()

export const OneProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({type:"SIDEBAR_OPEN"});
  }
  const closeSidebar = () => {
    dispatch({type:"SIDEBAR_CLOSE"});
  }

  return (
    <OneContext.Provider value={{...state, openSidebar, closeSidebar}}>
      {children}
    </OneContext.Provider>
  )
}

export const useOneContext = () => {
  return useContext(OneContext)
}