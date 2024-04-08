import { db } from 'src/lib/db'

export const orders = () => {
  return db.order.findMany()
}

export const order = ({ id }) => {
  console.log('id', id)
  return db.order.findUnique({
    where: { id },
  })
}

export const createOrder = async ({ input }) => {
  const { orderItems, ...orderData } = input

  // Start a transaction to ensure data integrity
  return db.$transaction(async (prisma) => {
    let insufficientItems = []

    // Check inventory levels for each item without immediately throwing an error
    for (const orderItem of orderItems) {
      const inventoryItem = await prisma.item.findUnique({
        where: { id: orderItem.itemId },
      })

      if (!inventoryItem || orderItem.quantity > inventoryItem.quantity) {
        // Collect information about insufficient inventory items
        insufficientItems.push({
          name: inventoryItem.name,
          available: inventoryItem.quantity,
        })
      }
    }

    // If there are any insufficient items, build and throw an error message
    if (insufficientItems.length > 0) {
      const errorMessage =
        insufficientItems
          .map((item) => `${item.available} ${item.name}`)
          .join(' and ') + ' available. Please resubmit your order.'
      throw new Error(`Sorry, we only have ${errorMessage}`)
    }

    // Proceed with order creation and inventory update if all items are sufficient
    const order = await prisma.order.create({
      data: {
        ...orderData,
        orderItems: {
          create: orderItems.map((item) => ({
            itemId: item.itemId,
            quantity: item.quantity,
          })),
        },
      },
    })

    // Update inventory for each ordered item
    for (const orderItem of orderItems) {
      await prisma.item.update({
        where: { id: orderItem.itemId },
        data: { quantity: { decrement: orderItem.quantity } },
      })
    }

    return order
  })
}

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
