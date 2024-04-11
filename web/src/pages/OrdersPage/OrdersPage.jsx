import OrdersCell from 'src/components/OrdersCell'
const OrdersPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-300">
      <div className="container mx-auto p-4">
        <header className="rounded-lg bg-blue-900 p-8 text-center text-white shadow-xl">
          <h1 className="font-playful text-4xl uppercase tracking-widest">
            The Cookie Stand&apos;s Orders
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
            <OrdersCell filter={{ status: 'fulfilled' }} />
          </section>
        </main>
      </div>
    </div>
  )
}

export default OrdersPage
