import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const DefaultLayout = ({ children }) => {
  const { isAuthenticated, hasRole } = useAuth()

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to={routes.home()}>Home</Link></li>
            {isAuthenticated && hasRole(['owner', 'seller']) && (
              <>
                <li><Link to={routes.orders()}>Orders</Link></li>
                <li><Link to={routes.inventory()}>Inventory</Link></li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default DefaultLayout
