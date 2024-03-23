import { useEffect } from 'react'

import { useMutation } from '@redwoodjs/web'

import ItemsCell from 'src/components/ItemsCell/ItemsCell'
import { useOrder } from 'src/providers/context/OrderContext'
import { usePageContext } from 'src/providers/context/PageContext'

const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrderMutation($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
      userId
      paymentMethod
      status
    }
  }
`

const HomePage = () => {
  const [, setPageContext] = usePageContext() // Destructure to get setState equivalent

  useEffect(() => {
    // Set the page context when the component mounts
    setPageContext({ pageType: 'Order' })
  }, [setPageContext])

  const [createOrder, { loading, error }] = useMutation(CREATE_ORDER_MUTATION)

  const { orderItems: items, clearOrder } = useOrder()
  console.log(items)
  const handleSubmitOrder = async () => {
    // Example data - replace with actual data from your application
    const userId = 1 // This should come from your authentication state/context
    const paymentMethod = 'Credit Card' // Example, adjust based on user selection
    const status = 'Pending' // Initial status, could be dynamic based on your logic

    // Assuming `orderItems` is an array of objects with `itemId` and `quantity`
    const orderItems = items.map((item) => ({
      itemId: item.itemId,
      quantity: item.quantity,
    }))

    try {
      const response = await createOrder({
        variables: {
          input: {
            userId,
            orderItems,
            paymentMethod,
            status,
          },
        },
      })

      console.log('Order submitted successfully:', response.data)
      clearOrder() // Clear the order state after successful submission
    } catch (error) {
      console.error('Error submitting order:', error)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-300">
      <div className="container mx-auto p-4">
        <header className="rounded-lg bg-blue-900 p-8 text-center text-white shadow-xl">
          <h1 className="font-playful text-4xl uppercase tracking-widest">
            The Cookie Stand
          </h1>
        </header>
        <main className="mt-8">
          <section className="text-center">
            <ItemsCell />
            <div className="mt-4">
              <button
                onClick={handleSubmitOrder}
                className="transform rounded-full bg-yellow-400 px-8 py-3 text-xl font-bold text-blue-900 shadow-lg transition hover:scale-105 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
              >
                Submit Order
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default HomePage
