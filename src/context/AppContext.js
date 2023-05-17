import { createContext } from 'react'
import icons from 'assets/icons/icons.svg'

export const AppContext = createContext()
export const AppContextProvier = ({ children }) => {
  const value = {
    icons
  }
  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}
