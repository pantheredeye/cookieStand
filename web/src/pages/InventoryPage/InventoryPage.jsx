import { useEffect } from 'react'

import { Metadata } from '@redwoodjs/web'
import { gql, useMutation } from '@redwoodjs/web'

import ItemsCell from 'src/components/ItemsCell/ItemsCell'
import { usePageContext } from 'src/providers/context/PageContext'

const UPDATE_INVENTORY_MUTATION = gql`
  mutation UpdateInventory($updateItems: [UpdateItemInput!]!) {
    updateItems(input: $updateItems) {
      id
      quantity
    }
  }
`

const InventoryPage = () => {
  const [, setPageContext] = usePageContext() // Destructure to get setState equivalent

  useEffect(() => {
    // Set the page context when the component mounts
    setPageContext({ pageType: 'Inventory' })
  }, [setPageContext])

  const [updateInventory, { loading, error }] = useMutation(
    UPDATE_INVENTORY_MUTATION,
    {
      onCompleted: () => {
        // Handle actions after the order is successfully submitted
        console.log('Inventory updated successfully')
        // Reset states or navigate to a success page here
      },
    }
  )

  const handleUpdateInventory = async () => {
    try {
      const result = await updateInventory({
        variables: {
          inventoryItems: inventoryItemDetails.map((item) => ({
            itemId: item.id, // Assuming this is required
            quantity: item.quantity,
          })),
        },
      })
      if (!result || !result.data) {
        throw new Error('Failed to update inventory')
      }
      alert(`Inventory Updated`)
    } catch (error) {
      console.error('Error updating inventory:', error)
    }
  }
  return (
    <>
      <Metadata title="Inventory" description="Inventory page" />
      <div className="flex min-h-screen items-center justify-center bg-pink-300">
        <div className="container mx-auto p-4">
          <header className="rounded-lg bg-blue-900 p-8 text-center text-white shadow-xl">
            <h1 className="font-playful text-4xl uppercase tracking-widest">
              Inventory
            </h1>
          </header>
          <main className="mt-8">
            <section className="text-center">
              <ItemsCell />
              <div className="mt-4">
                <button
                  onClick={handleUpdateInventory}
                  disabled={loading}
                  className="transform rounded-full bg-yellow-400 px-8 py-3 text-xl font-bold text-blue-900 shadow-lg transition hover:scale-105 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
                >
                  Update Inventory
                </button>
              </div>
              {error && (
                <p className="mt-4 text-center text-xl text-red-500">
                  Error updateing inventory: {error.message}
                </p>
              )}
            </section>
          </main>
        </div>
      </div>
      <ItemsCell />
    </>
  )
}

export default InventoryPage
