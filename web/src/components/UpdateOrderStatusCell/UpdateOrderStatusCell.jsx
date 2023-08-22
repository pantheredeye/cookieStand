export const QUERY = gql`
  query FindUpdateOrderStatusQuery($id: Int!) {
    updateOrderStatus: updateOrderStatus(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ updateOrderStatus }) => {
  return <div>{JSON.stringify(updateOrderStatus)}</div>
}
