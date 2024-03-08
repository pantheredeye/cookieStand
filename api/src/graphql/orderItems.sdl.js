export const schema = gql`
  type OrderItem {
    id: Int!
    itemId: Int!
    item: Item!
    orderId: Int!
    order: Order!
    quantity: Int!
  }

  type Query {
    orderItems: [OrderItem!]! @requireAuth
    orderItem(id: Int!): OrderItem @requireAuth
  }

  input CreateOrderItemInput {
    itemId: Int!
    orderId: Int!
    quantity: Int!
  }

  input UpdateOrderItemInput {
    itemId: Int
    orderId: Int
    quantity: Int
  }

  type Mutation {
    createOrderItem(input: CreateOrderItemInput!): OrderItem! @requireAuth
    updateOrderItem(id: Int!, input: UpdateOrderItemInput!): OrderItem!
      @requireAuth
    deleteOrderItem(id: Int!): OrderItem! @requireAuth
  }
`
