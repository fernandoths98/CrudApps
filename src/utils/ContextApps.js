import React, { createContext, useState} from 'react'

export const contextApp = createContext();
const Provider = contextApp.Provider;

export const ContextApps = ({children}) => {

    const [dataLogin, setDataLogin] = useState([])

  return (
    <Provider
        value={{dataLogin, setDataLogin}}>
        {children}
    </Provider>
  )
}