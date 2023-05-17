import { createContext, useState } from 'react'

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
  const [items, setItems] = useState(cartData)
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
  // 商品加總金額
  let count = 0
  items.forEach(item => {
    count = count + item.price * item.quantity
  })
  const value = {
    items,
    onCartItemsChange: handleCartItemsChange,
    count
  }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
