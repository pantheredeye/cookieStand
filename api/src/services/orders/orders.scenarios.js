export const standard = defineScenario({
  order: {
    one: {
      data: {
        orderNumber: 'String',
        paymentMethod: 'String',
        status: 'String',
        user: {
          create: { name: 'String', email: 'String5124064', address: 'String' },
        },
      },
    },
    two: {
      data: {
        orderNumber: 'String',
        paymentMethod: 'String',
        status: 'String',
        user: {
          create: { name: 'String', email: 'String20386', address: 'String' },
        },
      },
    },
  },
})
