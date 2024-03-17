// web/src/providers/context/index.js
import { OrderProvider } from './context/OrderContext' // Import the OrderProvider
import { PageContextProvider } from './context/PageContext'

const AllContextProviders = ({ children }) => {
  return (
    <PageContextProvider>
      <OrderProvider>{children}</OrderProvider> {/* Add OrderProvider */}
    </PageContextProvider>
  )
}

export default AllContextProviders
