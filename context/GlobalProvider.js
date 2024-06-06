import { createContext, useState, useContext } from "react";

export const useGlobalContext = () => useContext(GlobalContext)
const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
