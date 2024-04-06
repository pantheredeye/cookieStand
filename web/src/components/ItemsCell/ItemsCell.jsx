import { useState, useContext } from 'react'
import { PageContext } from 'src/providers/context/PageContext';

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

export const Success = ({ items, onDeleteItem }) => {
  const [orderDetails, setOrderDetails] = useState({})
  const [pageContext] = useContext(PageContext);

  // Example client-side filtering based on pageType context
  const filteredItems = pageContext.pageType === 'Order'
    ? items.filter(item => item.quantity > 0)
    : items;

  const handleQuantityChange = (itemId, quantity) => {
    setOrderDetails({
      ...orderDetails,
      [itemId]: quantity,
    })
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filteredItems.map((item) => (
        <div key={item.id} className="w-full p-4 md:w-1/2 lg:w-1/3">
          <div className="rounded-xl bg-white p-5 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <h3 className="font-playful text-2xl text-blue-900">{item.name}</h3>
            <p className="text-md text-gray-700">{item.description}</p>
            <p className="text-lg font-bold text-blue-900">
              Price: ${item.price}
            </p>
            <ItemQuantityAdjuster
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onDeleteItem={onDeleteItem}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
