import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import OrderDetailItem from 'src/components/OrderDetailItem/OrderDetailItem'
const UPDATE_ORDER_STATUS_MUTATION = gql`
  mutation UpdateOrderStatusMutation($id: Int!, $status: String!) {
    updateOrder(id: $id, input: { status: $status }) {
      id
      status
    }
  }
`

const OrderDetail = ({ order }) => {
  const [updateOrderStatus] = useMutation(UPDATE_ORDER_STATUS_MUTATION)

  const handleComplete = async () => {
    try {
      await updateOrderStatus({
        variables: { id: order.id, status: 'fulfilled' },
      })
      navigate(routes.home()) // Navigate back to the orders page
    } catch (error) {
      console.error('Failed to update order status:', error)
    }
  }

  const calculateTotal = () => {
    return order.orderItems.reduce(
      (total, item) => total + item.quantity * item.item.price,
      0
    )
  }

  return (
    <div className="mx-auto max-w-4xl bg-white p-6 shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="mb-4 md:w-1/2">
          <h2 className="text-xl font-bold text-blue-900">
            Customer Information
          </h2>
          <div className="mt-2 text-lg">
            <p>Customer: {order.user.name}</p>
            <p>Address: {order.user.address || 'Address not provided'}</p>
          </div>

          <h2 className="mt-4 text-xl font-bold text-blue-900">
            Order Details
          </h2>
          <div className="mt-2 text-lg">
            <p>Payment Method: {order.paymentMethod}</p>
            <p>Status: {order.status}</p>
            <p>Order Created: {new Date(order.createdAt).toLocaleString()}</p>
            <p>Last Updated: {new Date(order.updatedAt).toLocaleString()}</p>
          </div>
        </div>

        <div className="md:ml-4 md:w-1/2">
          {/* Items within the Order */}
          <OrderDetailItem items={order.orderItems} />
          <div className="mt-2 text-lg font-bold">
            Total: ${calculateTotal().toFixed(2)}
          </div>
        </div>
      </div>

      <button
        onClick={handleComplete}
        className="mt-4 rounded bg-yellow-400 px-6 py-2 font-bold text-blue-900"
      >
        Complete Order
      </button>
    </div>
  )
}

export default OrderDetail
