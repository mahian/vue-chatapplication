const { buildSchema } = require('graphql');

const userSchema = buildSchema(`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`);

module.exports = userSchema;
