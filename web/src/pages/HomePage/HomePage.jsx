import { useState } from 'react'

import { gql, useMutation } from '@redwoodjs/web'

import ItemsCell from 'src/components/ItemsCell/ItemsCell'

const PLACE_ORDER_MUTATION = gql`
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

const HomePage = () => {
  const [orderDetails, setOrderDetails] = useState({}) // Assuming this holds your order data
  const [orderItemsDetails, setOrderItemsDetails] = useState([]) // Assuming this holds your order items

  // callback function to store state changes from the cell
  const handleQuantityChange = (itemId, quantity) => {
    setOrderItemsDetails((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    )
  }

  const [placeOrder, { loading, error }] = useMutation(PLACE_ORDER_MUTATION, {
    onCompleted: () => {
      // Handle actions after the order is successfully submitted
      console.log('Order submitted successfully')
      // Reset states or navigate to a success page here
    },
  })

  const handleSubmitOrder = async () => {
    try {
      const result = await placeOrder({
        variables: {
          order: orderDetails,
          orderItems: orderItemsDetails.map((item) => ({
            orderId: item.id, // Assuming this is required
            quantity: item.quantity,
          })),
        },
      })
      if (!result || !result.data) {
        throw new Error('Failed to place order')
      }
      alert(
        `Your order has been placed successfully. Order ID: ${result.data.createOrder.id}`
      )
    } catch (error) {
      console.error('Error submitting order:', error)
    }
  }

  return (
    <div className="home">
      <header>
        <p>The Cookie Stand</p>
      </header>
      <main>
        <section className="orderform">
          <ItemsCell />
          <button
            onClick={handleSubmitOrder}
            disabled={loading}
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Submit Order
          </button>
          {error && (
            <p className="text-red-500">
              Error submitting order: {error.message}
            </p>
          )}
        </section>
      </main>
    </div>
  )
}

export default HomePage
