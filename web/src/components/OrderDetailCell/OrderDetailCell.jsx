import OrderDetail from "../OrderDetail/OrderDetail"

export const QUERY = gql`
  query FindOrderDetailQuery($id: Int!) {
    order: order(id: $id) {
      id
      user {
        name
        address
      }
      orderItems {
        quantity
        item {
          name
          price
        }
      }
      paymentMethod
      status
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ order }) => {
  return <div><OrderDetail order={order} /></div>
}
