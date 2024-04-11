import OrderItem from '../OrderItem/OrderItem'

export const QUERY = gql`
  query OrdersQuery($filter: OrderFilterInput) {
    orders(filter: $filter) {
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

export const Success = ({ orders }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {orders.map((item) => {
        return <OrderItem key={item.id} order={item} />
      })}
    </div>
  )
}
