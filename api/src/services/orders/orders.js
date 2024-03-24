import { db } from 'src/lib/db'

export const orders = () => {
  return db.order.findMany()
}

export const order = ({ id }) => {
  return db.order.findUnique({
    where: { id },
  })
}

export const createOrder = ({ input }) => {
  // Destructure the input to separate `orderItems` from the rest of the order data
  const { orderItems, ...orderData } = input;

  // Transform `orderItems` into the structure Prisma expects for nested creation
  const transformedOrderItems = {
    create: orderItems.map(item => ({
      itemId: item.itemId,
      quantity: item.quantity,
    })),
  };

  return db.order.create({
    data: {
      ...orderData,
      orderItems: transformedOrderItems,
    },
  });
};


export const updateOrder = ({ id, input }) => {
  return db.order.update({
    data: input,
    where: { id },
  })
}

export const deleteOrder = ({ id }) => {
  return db.order.delete({
    where: { id },
  })
}

export const Order = {
  user: (_obj, { root }) => {
    return db.order.findUnique({ where: { id: root?.id } }).user()
  },
  orderItems: (_obj, { root }) => {
    return db.order.findUnique({ where: { id: root?.id } }).orderItems()
  },
}
