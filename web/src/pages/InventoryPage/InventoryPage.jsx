import { useEffect } from 'react'

import { Metadata } from '@redwoodjs/web'

import ItemsCell from 'src/components/ItemsCell/ItemsCell'
import { usePageContext } from 'src/providers/context/PageContext'

const InventoryPage = () => {
  const [, setPageContext] = usePageContext() // Destructure to get setState equivalent

  useEffect(() => {
    // Set the page context when the component mounts
    setPageContext({ page: 'Inventory' })
  }, [setPageContext])

  return (
    <>
      <Metadata title="Inventory" description="Inventory page" />

      <h1>InventoryPage</h1>
      <ItemsCell />
    </>
  )
}

export default InventoryPage
