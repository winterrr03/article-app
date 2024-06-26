import { gql } from "apollo-server-express";

export const typeDefsUser = gql`
  type User {
    code: Int,
    message: String,
    id: String,
    fullName: String,
    email: String,
    token: String
  }

  input RegisterUserInput {
    fullName: String,
    email: String,
    password: String
  }

  input LoginUserInput {
    email: String,
    password: String
  }

  type Query {
    getUser: User
  }

  type Mutation {
    registerUser(user: RegisterUserInput): User,
    loginUser(user: LoginUserInput): User
  }
`