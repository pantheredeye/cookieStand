// web/src/providers/context/index.js
import { InventoryProvider } from './context/InventoryContext'
import { OrderProvider } from './context/OrderContext'
import { PageContextProvider } from './context/PageContext'

const AllContextProviders = ({ children }) => {
  return (
    <PageContextProvider>
      <OrderProvider>
        <InventoryProvider>{children}</InventoryProvider>
      </OrderProvider>
    </PageContextProvider>
  )
}

export default AllContextProviders
