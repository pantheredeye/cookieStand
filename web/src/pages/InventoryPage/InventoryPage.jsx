import { useEffect, useRef } from 'react'

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
const CREATE_ITEM_MUTATION = gql`
  mutation CreateItemMutation($input: CreateItemInput!) {
    createItem(input: $input) {
      id
    }
  }
`

const InventoryPage = () => {
  const [, setPageContext] = usePageContext()
  const formRef = useRef(null); // Create a ref for the form


  // useMutation hook for createItem mutation
  const [createItem, { loading: creatingItem, error: createItemError }] = useMutation(CREATE_ITEM_MUTATION, {
    refetchQueries: [{ query: gql`query ItemsQuery { items { id name description price quantity } }` }],
  });

  useEffect(() => {
    setPageContext({ pageType: 'Inventory' })
  }, [setPageContext])

  // useMutation hook for updateInventory mutation
  const [updateInventory, { loading: updatingInventory, error: updateInventoryError }] = useMutation(UPDATE_INVENTORY_MUTATION)

  const handleUpdateInventory = async () => {
    try {
      const result = await updateInventory({
        variables: {
          inventoryItems: inventoryItemDetails.map((item) => ({
            itemId: item.id,
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

  const handleAddItem = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const itemDetails = Object.fromEntries(formData)

    // Ensure quantity is an integer
    if (itemDetails.quantity) {
      itemDetails.quantity = parseInt(itemDetails.quantity, 10)
    }

    // Ensure price is a float
    if (itemDetails.price) {
      itemDetails.price = parseFloat(itemDetails.price)
    }

    try {
      await createItem({ variables: { input: itemDetails } })
      // alert('Item added successfully')
      formRef.current.reset(); // Reset the form on successful item creation

    } catch (error) {
      console.error('Error creating item:', error)
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
                  disabled={updatingInventory}
                  className="transform rounded-full bg-yellow-400 px-8 py-3 text-xl font-bold text-blue-900 shadow-lg transition hover:scale-105 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
                >
                  Update Inventory
                </button>
              </div>
              <div className="mt-8 rounded-lg bg-white p-8 shadow-lg">
                <form  ref={formRef} onSubmit={handleAddItem} className="space-y-6">
                  <div>
                    <label
                      htmlFor="item-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id="item-name"
                        autoComplete="off"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="item-description"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="description"
                        id="item-description"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="item-price"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Price
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="number"
                          step="0.01"
                          name="price"
                          id="item-price"
                          autoComplete="off"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="item-quantity"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Quantity
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="number"
                          name="quantity"
                          id="item-quantity"
                          autoComplete="off"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={creatingItem}
                      className="transform rounded-full bg-yellow-400 px-8 py-3 text-xl font-bold text-blue-900 shadow-lg transition hover:scale-105 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
                    >
                      Add Item
                    </button>
                  </div>
                </form>
              </div>
              {createItemError && (
                <p className="text-red-500">Error creating item: {createItemError.message}</p>
              )}
              {updateInventoryError && (
                <p className="text-red-500">Error updating inventory: {updateInventoryError.message}</p>
              )}
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default InventoryPage
