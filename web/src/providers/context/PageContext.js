import { useContext, createContext, useState } from 'react'

// Your existing Context and Provider
const PageContext = createContext()

const PageContextProvider = ({ children }) => {
  const [state, setState] = useState({})
  return (
    <PageContext.Provider value={[state, setState]}>
      {children}
    </PageContext.Provider>
  )
}

// Custom hook for easier context usage
export const usePageContext = () => {
  const context = useContext(PageContext)
  if (context === undefined) {
    throw new Error('usePageContext must be used within a PageContextProvider')
  }
  return context
}

export { PageContext, PageContextProvider }
