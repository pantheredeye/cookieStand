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
mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    orderNumber
    user {
      id
    }
    orderItems {
      id
      item {
        id
        name
      }
      quantity
    }
    paymentMethod
    status
    createdAt
    updatedAt
  }
}

const HomePage = () => {
  const [orderDetails, setOrderDetails] = useState({}) // Assuming this holds your order data
  const [orderItemsDetails, setOrderItemsDetails] = useState([]) // Assuming this holds your order items

  // callback function to store state changes from the cell
  const handleQuantityChange = (itemId, quantity) => {
    setOrderItemsDetails(prev => ({ ...prev, [itemId]: quantity }));
  };


  const [placeOrder, { loading, error }] = useMutation(PLACE_ORDER_MUTATION, {
    onCompleted: () => {
      // Handle actions after the order is successfully submitted
      console.log('Order submitted successfully')
      // Reset states or navigate to a success page here
    },
  })

  const handleSubmitOrder = async () => {
    try {
      await placeOrder({
        variables: {
          order: orderDetails, // Ensure these details match your expected input structure
          orderItems: orderItemsDetails, // Ensure these details match your expected input structure
        },
      })
      // Additional success handling as needed
    } catch (error) {
      // Error handling is here if needed
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
