// web/src/providers/context/index.js
import { OrderProvider } from './context/OrderContext'
import { InventoryProvider } from './context/InventoryContext'
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
