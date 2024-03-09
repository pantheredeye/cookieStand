export const schema = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    address: String!
    orders: [Order]!
    stripeId: String
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String!
    email: String!
    address: String!
    stripeId: String
  }

  input UpdateUserInput {
    name: String
    email: String
    address: String
    stripeId: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
