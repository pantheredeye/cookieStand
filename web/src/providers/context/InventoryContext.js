import { createContext, useContext, useState } from 'react'

const InventoryContext = createContext()

export const InventoryProvider = ({ children }) => {
  const [inventoryUpdateItems, setInventoryItems] = useState([])

  // Define any functions to modify the inventory here
  const updateInventoryItemQuantity = (itemId, quantity) => {
    setInventoryItems((currentItems) => {
      const itemIndex = currentItems.findIndex((item) => item.itemId === itemId)
      if (itemIndex >= 0 && quantity === 0) {
        // Remove item from array if quantity is 0
        console.log('remove item from array if quantity is 0', currentItems)

        return currentItems.filter((item) => item.itemId !== itemId)
      } else if (itemIndex >= 0) {
        // Update quantity if item exists
        const updatedItems = [...currentItems]
        updatedItems[itemIndex].quantity = quantity
        console.log('update quantity if item exists', currentItems)

        return updatedItems
      } else if (quantity > 0) {
        // Add new item with quantity if not already in array
        console.log(
          'add new item with quantity if not already in array',
          currentItems
        )

        return [...currentItems, { itemId, quantity }]
      }
      console.log('currentItems', currentItems)

      return currentItems
    })
  }

  return (
    <InventoryContext.Provider
      value={{ inventoryUpdateItems, updateInventoryItemQuantity }}
    >
      {children}
    </InventoryContext.Provider>
  )
}

export const useInventory = () => useContext(InventoryContext)
