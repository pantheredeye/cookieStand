import { Link, routes } from '@redwoodjs/router'

const AdminLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Cookie Stand Admin</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
              <Link to={routes.inventory()}>Inventory</Link>
              <Link to={routes.orders()}>Orders</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AdminLayout
