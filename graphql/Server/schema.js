// import { gql } from 'graphql-tag';

// export const typeDefs = gql`
//   type Query {
//     users: [User!]!
//     getBooks: [Book!]!
//   }

//   """User is a group of users of the Systems"""
//   type User {
//     id: ID!
//     name: String!
//     address: String!
//   }

//   type Book {
//     id: ID!
//     authors: [Author!]!
//     price: Float!
//   }

//   type Author {
//     id: ID!
//     name: String!
//     address: String!
//   }
// `;

import { gql } from 'graphql-tag';

export const typeDefs = gql`
   type Query {
    getUser(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;


  // type Query {
  //   getUser(id: ID!): User
  // }

  // type User {
  //   id: ID!
  //   name: String!
  //   email: String!
  // }


