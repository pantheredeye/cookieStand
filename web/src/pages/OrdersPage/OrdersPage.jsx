import { requireAuth } from '@redwoodjs/auth'
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

export default { OrdersPage, name: 'OrdersPage', beforeEnter: requireAuth }
