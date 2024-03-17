import { useState, useEffect } from 'react'

import { usePageContext } from 'src/providers/context/PageContext'
const ItemQuantityAdjuster = ({ item, onQuantityChange }) => {
  const [pageContext] = usePageContext() // Use the context to get the current page type
  const [quantity, setQuantity] = useState(0) // Initialize with 0

  // Adjust quantity state based on the page context when the component mounts
  useEffect(() => {
    if (pageContext.pageType === 'Inventory') {
      setQuantity(item.quantity)
    }
    // If it's not the Inventory page, we keep it at 0 or could adjust based on other conditions
  }, [pageContext.pageType, item.quantity])

  const handleDecrease = () => {
    const newQuantity = Math.max(0, quantity - 1) // Ensure quantity doesn't go below 0
    setQuantity(newQuantity)
    onQuantityChange(item.id, newQuantity)
  }

  const handleIncrease = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    onQuantityChange(item.id, newQuantity)
  }

  const handleChange = (event) => {
    let newQuantity = parseInt(event.target.value, 10)
    // Prevent setting quantity to negative numbers
    if (isNaN(newQuantity) || newQuantity < 0) {
      newQuantity = 0
    }
    setQuantity(newQuantity)
    onQuantityChange(item.id, newQuantity)
  }

  // ItemQuantityAdjuster component
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
    </div>
  )
}

export default ItemQuantityAdjuster
