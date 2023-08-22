// web/src/components/InventoryItemForm/InventoryItemForm.js

import { useMutation } from '@redwoodjs/web'

import { UPDATE_INVENTORY_MUTATION } from 'src/components/InventoryItemCell'

const InventoryItemForm = ({ inventoryItem }) => {
  const [updateInventory, { loading, error }] = useMutation(
    UPDATE_INVENTORY_MUTATION
  )

  const onSubmit = (data) => {
    updateInventory({ variables: { id: inventoryItem.id, input: data } })
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        defaultValue={inventoryItem.quantity}
        name="quantity"
        type="number"
      />
      <button type="submit">Update</button>
    </form>
  )
}

export default InventoryItemForm
