import {
  orderItems,
  orderItem,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
} from './orderItems'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('orderItems', () => {
  scenario('returns all orderItems', async (scenario) => {
    const result = await orderItems()

    expect(result.length).toEqual(Object.keys(scenario.orderItem).length)
  })

  scenario('returns a single orderItem', async (scenario) => {
    const result = await orderItem({ id: scenario.orderItem.one.id })

    expect(result).toEqual(scenario.orderItem.one)
  })

  scenario('creates a orderItem', async (scenario) => {
    const result = await createOrderItem({
      input: {
        itemId: scenario.orderItem.two.itemId,
        orderId: scenario.orderItem.two.orderId,
        quantity: 2435332,
      },
    })

    expect(result.itemId).toEqual(scenario.orderItem.two.itemId)
    expect(result.orderId).toEqual(scenario.orderItem.two.orderId)
    expect(result.quantity).toEqual(2435332)
  })

  scenario('updates a orderItem', async (scenario) => {
    const original = await orderItem({
      id: scenario.orderItem.one.id,
    })
    const result = await updateOrderItem({
      id: original.id,
      input: { quantity: 807830 },
    })

    expect(result.quantity).toEqual(807830)
  })

  scenario('deletes a orderItem', async (scenario) => {
    const original = await deleteOrderItem({
      id: scenario.orderItem.one.id,
    })
    const result = await orderItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
