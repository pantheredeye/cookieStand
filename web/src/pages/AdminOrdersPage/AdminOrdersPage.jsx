import { MetaTags } from '@redwoodjs/web'

import UpdateOrderStatusCell from 'src/components/UpdateOrderStatusCell'

const AdminOrdersPage = () => {
  return (
    <>
      <MetaTags title="AdminOrders" description="AdminOrders page" />

      <h1>AdminOrdersPage</h1>
      <UpdateOrderStatusCell />
    </>
  )
}

export default AdminOrdersPage
