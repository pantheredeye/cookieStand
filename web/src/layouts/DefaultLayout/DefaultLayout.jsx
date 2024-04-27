import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'

const DefaultLayout = ({ children }) => {
  const { isAuthenticated, hasRole, logOut } = useAuth()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-blue-900 text-white">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <Link to={routes.home()} className="font-playful text-2xl tracking-widest">
            The Cookie Stand
          </Link>
          <ul className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {hasRole('owner') && (
                  <>
                    <li>
                      <Link
                        to={routes.orders()}
                        className="rounded bg-yellow-400 px-4 py-2 font-bold text-blue-900 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
                      >
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={routes.inventory()}
                        className="rounded bg-yellow-400 px-4 py-2 font-bold text-blue-900 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
                      >
                        Inventory
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <button
                    onClick={logOut}
                    className="rounded bg-yellow-400 px-4 py-2 font-bold text-blue-900 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={routes.login()} className="hover:text-yellow-400">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link
                    to={routes.signup()}
                    className="rounded bg-yellow-400 px-4 py-2 font-bold text-blue-900 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
    </div>
  )
}

export default DefaultLayout
