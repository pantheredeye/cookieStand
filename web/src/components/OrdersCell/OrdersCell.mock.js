export const standard = (/* vars, { ctx, req } */) => ({
  orders: [
    {
      id: 42,
      orderNumber: 'ORD001',
      userId: 1,
      paymentMethod: 'Stripe',
      status: 'Pending',
    },
    {
      id: 43,
      orderNumber: 'ORD002',
      userId: 2,
      paymentMethod: 'Cash',
      status: 'Delivered',
    },
    {
      id: 44,
      orderNumber: 'ORD003',
      userId: 3,
      paymentMethod: 'Stripe',
      status: 'In Delivery',
    },
  ],
})
