export const schema = gql`
  type Order {
    id: Int!
    userId: Int!
    user: User!
    orderItems: [OrderItem]!
    paymentMethod: String!
    status: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    orders: [Order!]! @requireAuth
    order(id: Int!): Order @requireAuth
  }

  input CreateOrderInput {
    userId: Int!
    orderItems: [OrderItemInput!]!
    paymentMethod: String!
    status: String!
  }

  input OrderItemInput {
    itemId: Int!
    quantity: Int!
  }
  input UpdateOrderInput {
    userId: Int
    paymentMethod: String
    status: String
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order! @requireAuth
    updateOrder(id: Int!, input: UpdateOrderInput!): Order! @requireAuth
    deleteOrder(id: Int!): Order! @requireAuth
  }
`
