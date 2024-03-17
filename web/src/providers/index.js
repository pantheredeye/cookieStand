// web/src/providers/context/index.js

import { PageContextProvider } from './context/PageContext'

const AllContextProviders = ({ children }) => {
  // Add additional context providers here
  return <PageContextProvider>{children}</PageContextProvider>
}

export default AllContextProviders
