import { createContext, useContext, useState } from 'react'

const OrderContext = createContext()

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([])
  const [lastCleared, setLastCleared] = useState(Date.now())

  const updateItemQuantity = (itemId, quantity) => {
    setOrderItems((currentItems) => {
      const itemIndex = currentItems.findIndex((item) => item.itemId === itemId)
      if (itemIndex >= 0 && quantity === 0) {
        // Remove item from order if quantity is 0
        return currentItems.filter((item) => item.itemId !== itemId)
      } else if (itemIndex >= 0) {
        // Update quantity if item exists
        const updatedItems = [...currentItems]
        updatedItems[itemIndex].quantity = quantity
        return updatedItems
      } else if (quantity > 0) {
        // Add new item with quantity if not already in order
        return [...currentItems, { itemId, quantity }]
      }
      return currentItems
    })
  }

  const clearOrder = () => {
    setOrderItems([])
    setLastCleared(Date.now()) // Update timestamp to signal a reset
  }

  return (
    <OrderContext.Provider
      value={{ orderItems, updateItemQuantity, clearOrder, lastCleared }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrder = () => useContext(OrderContext)
