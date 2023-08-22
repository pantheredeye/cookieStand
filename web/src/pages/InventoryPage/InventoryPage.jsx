import { MetaTags } from '@redwoodjs/web'

import UpdateItemQuantityCell from 'src/components/UpdateItemQuantityCell'

const InventoryPage = () => {
  return (
    <>
      <MetaTags title="Inventory" description="Inventory page" />

      <h1>InventoryPage</h1>
      <UpdateItemQuantityCell />
    </>
  )
}

export default InventoryPage
