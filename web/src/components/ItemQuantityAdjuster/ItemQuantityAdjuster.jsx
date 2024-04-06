import { useState, useEffect } from 'react'

import { useOrder } from 'src/providers/context/OrderContext' // Import useOrder hook
import { usePageContext } from 'src/providers/context/PageContext'

const ItemQuantityAdjuster = ({ item, onDeleteItem }) => {
  const [pageContext] = usePageContext() // Use the context to get the current page type
  const { updateItemQuantity, lastCleared } = useOrder() // Use the updateItemQuantity function from OrderContext
  const [quantity, setQuantity] = useState(0) // Initialize with 0

  // Reset quantity to 0 on order clear
  useEffect(() => {
    setQuantity(0)
  }, [lastCleared])

  // Adjust quantity state based on the page context when the component mounts
  useEffect(() => {
    if (pageContext.pageType === 'Inventory') {
      setQuantity(item.quantity)
    }
  }, [pageContext.pageType, item.quantity, lastCleared])

  // This function updates both the local component state and the global order state
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity)
    // Update the global order state only if the current page type is "Order"
    if (pageContext.pageType === 'Order') {
      updateItemQuantity(item.id, newQuantity)
    }
  }

  const handleDecrease = () => {
    const newQuantity = Math.max(0, quantity - 1) // Ensure quantity doesn't go below 0
    handleQuantityChange(newQuantity)
  }

  const handleIncrease = () => {
    const newQuantity = quantity + 1
    handleQuantityChange(newQuantity)
  }

  const handleChange = (event) => {
    let newQuantity = parseInt(event.target.value, 10)
    // Prevent setting quantity to negative numbers
    if (isNaN(newQuantity) || newQuantity < 0) {
      newQuantity = 0
    }
    handleQuantityChange(newQuantity)
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={handleDecrease}
        className="rounded bg-blue-900 px-3 py-1 text-xl font-bold text-yellow-400 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-300"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min="0"
        className="w-16 rounded bg-yellow-400 text-center text-xl font-bold text-blue-900 focus:ring-2 focus:ring-yellow-300"
      />
      <button
        onClick={handleIncrease}
        className="rounded bg-blue-900 px-3 py-1 text-xl font-bold text-yellow-400 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-300"
      >
        +
      </button>
      {onDeleteItem && pageContext.pageType === 'Inventory' && (
        <button
          onClick={() => onDeleteItem(item.id)}
          className="rounded bg-red-500 px-3 py-1 text-sm font-bold text-white hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
        >
          Delete
        </button>
      )}
    </div>
  )
}

export default ItemQuantityAdjuster
