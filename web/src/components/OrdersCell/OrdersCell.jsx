import OrderItem from "../OrderItem/OrderItem"

export const QUERY = gql`
  query OrdersQuery {
    orders {
      id
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
    <ul>
      {orders.map((item) => {
        return <OrderItem key={item.id} order={item} />
      })}
    </ul>
  )
}
