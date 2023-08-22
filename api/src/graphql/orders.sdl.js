export const schema = gql`
  type Order {
    id: Int!
    orderNumber: String!
    userId: Int!
    user: User!
    orderItems: [OrderItem]!
    paymentMethod: String!
    status: String!
  }

  type Query {
    orders: [Order!]! @requireAuth
    order(id: Int!): Order @requireAuth
  }

  input CreateOrderInput {
    orderNumber: String!
    userId: Int!
    paymentMethod: String!
    status: String!
  }

  input UpdateOrderInput {
    orderNumber: String
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
