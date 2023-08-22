import UpdateOrderStatusCell from 'src/components/UpdateOrderStatusCell'

const OrderCard = ({ order }) => {
  return (
    <div>
      <h2>Order {order.orderNumber}</h2>
      <p>Status: {order.status}</p>
      <UpdateOrderStatusCell orderId={order.id} />
    </div>
  )
}

export default OrderCard
