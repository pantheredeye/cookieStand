const OrderItem = ({ order }) => {
  // You can include a handler function within this component or pass it down as props
  const handleComplete = () => {
    console.log('Completing order:', order.id);
    // Logic to complete the order
  };

  return (
    <div className="mx-auto max-w-4xl bg-white p-6 shadow-lg">
      {/* User Info */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-blue-900">Customer:</h3>
        <p className="text-lg">{order.user.name}</p>
        <p className="text-md text-gray-700">{order.user.address || 'Address not provided'}</p>
      </div>
      {/* The rest of your order card layout */}
    </div>
  );
};


export default OrderItem
