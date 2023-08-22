import { MetaTags } from '@redwoodjs/web'

import OrdersCell from 'src/components/OrdersCell'

const OrdersPage = () => {
  return (
    <>
      <MetaTags title="Orders" description="Orders page" />

      <h1>OrdersPage</h1>
      <OrdersCell />
    </>
  )
}

export default OrdersPage
