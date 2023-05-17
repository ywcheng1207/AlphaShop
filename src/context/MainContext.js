import { createContext } from 'react'
import { CartContextProvier } from './CartContext'
export const MainContext = createContext()
export const MainContextProvier = ({ children }) => {
  const value = {

  }
  return (
    <MainContext.Provider value={value}>
      <CartContextProvier>
        {children}
      </CartContextProvier>
    </MainContext.Provider>
  )
}
