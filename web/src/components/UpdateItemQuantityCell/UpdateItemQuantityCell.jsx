export const QUERY = gql`
  query FindUpdateItemQuantityQuery($id: Int!) {
    updateItemQuantity: updateItemQuantity(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ updateItemQuantity }) => {
  return <div>{JSON.stringify(updateItemQuantity)}</div>
}
