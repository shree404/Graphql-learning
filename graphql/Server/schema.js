

import { gql } from 'graphql-tag';

export const typeDefs = gql`
   type Query {
    getUser(id: ID!): User
    getUsers(ids: [ID!]!): [User] 
    addUser(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
    type Mutation {
  addUser(id: ID!, name: String!, email: String!): User!
  updateUserName(id: ID!, update: UpdateUserInput!): User
}

input UpdateUserInput {
  name: String
  email: String
}
`;

//for multiple data retriving include one query 
//getUsers(ids: [ID!]!): [User] 

//Also update resolver


  