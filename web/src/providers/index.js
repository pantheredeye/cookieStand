// web/src/providers/context/index.js
import { OrderProvider } from './OrderContext' // Import the OrderProvider
import { PageContextProvider } from './PageContext'

const AllContextProviders = ({ children }) => {
  return (
    <PageContextProvider>
      <OrderProvider>{children}</OrderProvider> {/* Add OrderProvider */}
    </PageContextProvider>
  )
}

export default AllContextProviders
