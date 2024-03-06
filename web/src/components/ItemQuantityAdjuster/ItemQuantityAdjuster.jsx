import { useState } from 'react'

const ItemQuantityAdjuster = ({ item, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0) // Set initial quantity to 0

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

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min="0" // Set minimum value to 0
        style={{ textAlign: 'center' }}
      />
      <button onClick={handleIncrease}>+</button>
    </div>
  )
}

export default ItemQuantityAdjuster
