import { navigate, useParams } from '@redwoodjs/router'

import OrderDetailCell from 'src/components/OrderDetailCell'

const OrderDetailPage = () => {
  const { orderId } = useParams()
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-300">
      <div className="container mx-auto p-4">
        <header className="rounded-lg bg-blue-900 p-8 text-center text-white shadow-xl">
          <h1 className="font-playful text-4xl uppercase tracking-widest">
            The Cookie Stand Order Info
          </h1>
        </header>
        <main className="mt-8">
          <section className="text-center">
            {/* {errorMessage && (
              <div
                className={`error-message mb-4 rounded-md bg-red-100 p-4 text-red-700 ${
                  !showError ? 'hide' : ''
                }`}
              >
                {errorMessage}
              </div>
            )} */}
            <OrderDetailCell id={parseInt(orderId, 10)} />
            <div className="mt-4">
              <button
                onClick={() => navigate('/orders')}
                className="ml-4 mt-4 rounded bg-blue-400 px-6 py-2 font-bold text-white"
              >
                Go to Orders
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default OrderDetailPage
