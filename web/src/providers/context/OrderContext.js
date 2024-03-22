import { createContext, useContext, useState } from 'react'

const OrderContext = createContext()

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([])

  const updateItemQuantity = (itemId, quantity) => {
    console.log(JSON.stringify(orderItems))
    setOrderItems((currentItems) => {
      console.log(JSON.stringify(currentItems))
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

  // const submitOrder = async (orderDetails) => {
  //   console.log('Submitting order:', orderDetails)
  //   try {
  //     const response = await createOrder({
  //       variables: {
  //         input: orderDetails,
  //       },
  //     })
  //     console.log('Order submitted successfully', response.data)
  //     clearOrder()
  //   } catch (error) {
  //     console.error('Error submitting order', error)
  //   }
  // }

  const clearOrder = () => {
    setOrderItems([])
  }

  return (
    <OrderContext.Provider
      value={{ orderItems, updateItemQuantity, clearOrder }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrder = () => useContext(OrderContext)
