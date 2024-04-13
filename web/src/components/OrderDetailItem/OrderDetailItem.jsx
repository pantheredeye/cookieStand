// src/components/OrderDetailItems/OrderDetailItems.js

const OrderDetailItem = ({ items }) => {
  if (!items.length) return <p>No items in this order.</p>

  return (
    <>
      <h5 className="mb-2 text-lg font-bold text-blue-900">Items Ordered:</h5>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left font-bold">Name</th>
              <th className="px-4 py-2 text-left font-bold">Qty</th>
              <th className="px-4 py-2 text-left font-bold">Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="px-4 py-2">{item.item.name}</td>
                <td className="px-4 py-2">x{item.quantity}</td>
                <td className="px-4 py-2">${item.item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default OrderDetailItem
