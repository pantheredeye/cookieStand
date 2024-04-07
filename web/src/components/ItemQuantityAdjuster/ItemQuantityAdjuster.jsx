import { useState, useEffect } from 'react'

import { useOrder } from 'src/providers/context/OrderContext'
import { useInventory } from 'src/providers/context/InventoryContext'
import { usePageContext } from 'src/providers/context/PageContext'

const ItemQuantityAdjuster = ({ item, onDeleteItem }) => {
  const [pageContext] = usePageContext()
  const { updateItemQuantity, lastCleared } = useOrder()
  const { updateInventoryItemQuantity } = useInventory()

  const [quantity, setQuantity] = useState(0)

  // Reset quantity to 0 on order clear
  useEffect(() => {
    setQuantity(0)
  }, [lastCleared])

  useEffect(() => {
    if (pageContext.pageType === 'Inventory') {
      setQuantity(item.quantity)
    }
  }, [pageContext.pageType, item.quantity, lastCleared])

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity)
    if (pageContext.pageType === 'Order') {
      updateItemQuantity(item.id, newQuantity)
    }
    if (pageContext.pageType === 'Inventory') {
      updateInventoryItemQuantity(item.id, newQuantity)
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
