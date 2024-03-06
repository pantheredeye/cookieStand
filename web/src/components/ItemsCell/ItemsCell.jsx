import { useState } from 'react'

import ItemQuantityAdjuster from 'src/components/ItemQuantityAdjuster'

export const QUERY = gql`
  query ItemsQuery {
    items {
      id
      name
      description
      price
      quantity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ items }) => {
  const [orderDetails, setOrderDetails] = useState({})

  const handleQuantityChange = (itemId, quantity) => {
    setOrderDetails({
      ...orderDetails,
      [itemId]: quantity,
    })
  }

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.id} className="rounded-lg p-4 shadow">
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm">{item.description}</p>
            <p className="text-md font-bold">Price: ${item.price}</p>
            <ItemQuantityAdjuster
              item={item}
              onQuantityChange={handleQuantityChange}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
