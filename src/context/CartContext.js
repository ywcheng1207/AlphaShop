import { createContext, useState, useContext } from 'react'
import { MainContext } from 'context/MainContext'

const cartData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1
  }
]

export const CartContext = createContext()
export const CartContextProvier = ({ children }) => {
  // hook
  const [items, setItems] = useState(cartData)
  const { shippingCost } = useContext(MainContext)

  // handle
  const handleCartItemsChange = ({ id, quantity }) => {
    if (quantity < 0) {
      return
    }
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity
          }
        }
        return item
      })
    })
  }

  // 金額小記
  let count = items.reduce((ac, item) => ac + item.price * item.quantity, 0)
  count = (shippingCost === '$500') ? count + 500 : count
  // value
  const value = {
    items,
    onCartItemsChange: handleCartItemsChange,
    count
  }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
