import { useMutation } from '@apollo/client'

// import { placeOrderMutation } from '../api/src/graphql/mutations/placeOrder'

const placeOrderMutation = gql`
  mutation PlaceOrder(
    $order: CreateOrderInput!
    $orderItems: [CreateOrderItemInput!]!
  ) {
    createOrder(input: $order) {
      id
      status
    }
    createOrderItems(input: $orderItems) {
      id
      quantity
      item {
        name
        price
      }
    }
  }
`

const OrderForm = ({ orderItems, setOrderItems }) => {
  // Use the `useMutation` hook to execute the `placeOrderMutation`
  const [placeOrder, { loading, error }] = useMutation(placeOrderMutation)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // Call the `mutate()` function with the appropriate inputs
      const result = await placeOrder({
        variables: {
          orderItems: orderItems.map((item) => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        },
      })
      console.log('placeholder to work front-end')
      // Handle the response from the server
      if (!result || !result.data) {
        throw new Error('Failed to place order')
      }
      alert(
        `Your order has been placed successfully. Order ID: ${result.data.placeOrder.id}`
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {orderItems.map((item) => (
          <li key={item.id}>
            <label htmlFor={item.name}>{item.name}</label>
            <input
              type="number"
              id={item.name}
              value={item.quantity}
              min="0"
              max="10"
              step="1"
              onChange={(event) =>
                setOrderItems([
                  ...orderItems,
                  { ...item, quantity: parseInt(event.target.value, 10) },
                ])
              }
            />
          </li>
        ))}
      </ul>
      <button type="submit">Place Order</button>
    </form>
  )
}

export default OrderForm
