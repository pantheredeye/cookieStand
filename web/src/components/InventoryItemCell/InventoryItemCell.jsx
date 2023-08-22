import InventoryItemForm from 'src/components/InventoryItemForm'

export const QUERY = gql`
  query FindInventoryItemQuery($id: Int!) {
    inventoryItem: inventoryItem(id: $id) {
      id
    }
  }
`

export const UPDATE_INVENTORY_MUTATION = gql`
  mutation UpdateInventoryMutation($id: Int!, $input: UpdateInventoryInput!) {
    updateInventory(id: $id, input: $input) {
      id
      quantity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ inventoryItem }) => {
  return <InventoryItemForm inventoryItem={inventoryItem} />
}
