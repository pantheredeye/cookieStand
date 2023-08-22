import { MetaTags } from '@redwoodjs/web'

import ItemsCell from 'src/components/ItemsCell/ItemsCell'

const InventoryPage = () => {
  return (
    <>
      <MetaTags title="Inventory" description="Inventory page" />

      <h1>InventoryPage</h1>
      <ItemsCell />
    </>
  )
}

export default InventoryPage
