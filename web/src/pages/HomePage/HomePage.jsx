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
    <div className="flex min-h-screen items-center justify-center bg-pink-300">
      <div className="container mx-auto p-4">
        <header className="rounded-lg bg-blue-900 p-8 text-center text-white shadow-xl">
          <h1 className="font-playful text-4xl uppercase tracking-widest">
            The Cookie Stand
          </h1>
        </header>
        <main className="mt-8">
          <section className="text-center">
            <ItemsCell />
            <div className="mt-4">
              <button
                onClick={handleSubmitOrder}
                disabled={loading}
                className="transform rounded-full bg-yellow-400 px-8 py-3 text-xl font-bold text-blue-900 shadow-lg transition hover:scale-105 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
              >
                Submit Order
              </button>
            </div>
            {error && (
              <p className="mt-4 text-center text-xl text-red-500">
                Error submitting order: {error.message}
              </p>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}

export default HomePage
