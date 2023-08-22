import { orders, order, createOrder, updateOrder, deleteOrder } from './orders'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('orders', () => {
  scenario('returns all orders', async (scenario) => {
    const result = await orders()

    expect(result.length).toEqual(Object.keys(scenario.order).length)
  })

  scenario('returns a single order', async (scenario) => {
    const result = await order({ id: scenario.order.one.id })

    expect(result).toEqual(scenario.order.one)
  })

  scenario('creates a order', async (scenario) => {
    const result = await createOrder({
      input: {
        orderNumber: 'String',
        userId: scenario.order.two.userId,
        paymentMethod: 'String',
        status: 'String',
      },
    })

    expect(result.orderNumber).toEqual('String')
    expect(result.userId).toEqual(scenario.order.two.userId)
    expect(result.paymentMethod).toEqual('String')
    expect(result.status).toEqual('String')
  })

  scenario('updates a order', async (scenario) => {
    const original = await order({ id: scenario.order.one.id })
    const result = await updateOrder({
      id: original.id,
      input: { orderNumber: 'String2' },
    })

    expect(result.orderNumber).toEqual('String2')
  })

  scenario('deletes a order', async (scenario) => {
    const original = await deleteOrder({ id: scenario.order.one.id })
    const result = await order({ id: original.id })

    expect(result).toEqual(null)
  })
})
