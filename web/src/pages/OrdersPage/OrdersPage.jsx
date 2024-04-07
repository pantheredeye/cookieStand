import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import OrdersCell from 'src/components/OrdersCell'

const OrdersPage = () => {
  return (
    <>
      <Metadata title="Orders" description="Orders page" />

      <h1>OrdersPage</h1>
      <OrdersCell />
    </>
  )
}

export default OrdersPage
