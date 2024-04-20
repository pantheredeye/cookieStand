import { useEffect, useState } from 'react'
import { useMutation } from '@redwoodjs/web'
import ItemsCell from 'src/components/ItemsCell/ItemsCell'
import { useOrder } from 'src/providers/context/OrderContext'
import { usePageContext } from 'src/providers/context/PageContext'
import { navigate, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'

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
  const [errorMessage, setErrorMessage] = useState('')
  const [showError, setShowError] = useState(false)
  const { isAuthenticated, currentUser } = useAuth() // `currentUser` if you need to access user details

  useEffect(() => {
    // Set the page context when the component mounts
    setPageContext({ pageType: 'Order' })
  }, [setPageContext])

  const [createOrder] = useMutation(CREATE_ORDER_MUTATION)

  const { orderItems: items, clearOrder } = useOrder()
  const handleSubmitOrder = async () => {
    if (!isAuthenticated) {
      navigate(routes.login({ redirectTo: routes.home() }))
      return
    }

    setErrorMessage('') // Attempt to clear any pre-existing error messages.
    setShowError(false) // Hide the error message while attempting a new submission.

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
      await createOrder({
        variables: {
          input: {
            userId,
            orderItems,
            paymentMethod,
            status,
          },
        },
      })

      clearOrder() // Clear the order state after successful submission
    } catch (error) {
      console.error('Error submitting order:', error)

      // Attempt to extract the detailed error message from extensions.originalError.message
      const detailedErrorMessage =
        error.graphQLErrors?.[0]?.extensions?.originalError?.message

      // Fallback to a generic message if the specific one is not found
      const message =
        detailedErrorMessage ||
        'An unexpected error occurred. Please try again.'
      setErrorMessage(message)
      setShowError(true) // Show the error message.
    }
  }

  // Effect to handle showing and hiding error with fade
  useEffect(() => {
    if (errorMessage) {
      setShowError(true) // Show error message when there's an error
      const timer = setTimeout(() => {
        setShowError(false) // Begin to hide after a delay
      }, 5000) // Adjust time based on how long you want the message to be visible before fading

      return () => clearTimeout(timer)
    }
  }, [errorMessage])

  // Clear the error message from state after the fade out transition
  useEffect(() => {
    let timer
    if (!showError && errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage('') // Clear the error message state after fade out
      }, 2000) // This should match the CSS transition time
    }

    return () => clearTimeout(timer)
  }, [showError, errorMessage])

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
            {errorMessage && (
              <div
                className={`error-message mb-4 rounded-md bg-red-100 p-4 text-red-700 ${
                  !showError ? 'hide' : ''
                }`}
              >
                {errorMessage}
              </div>
            )}
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
