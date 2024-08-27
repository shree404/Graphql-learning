import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    users: [User]
    books: [Book]
  }

  """User is a group of users of the Systems"""
  type User {
    id: ID!
    name: String!
    address: String!
  }

  type Book {
    id: ID!
    authors: [Author]  # Changed to an array of authors
    price: Float!
  }

  type Author {
    id: ID!
    name: String!
    address: String!
  }
`;

// Mock data example
export const mocks = {
  Query: () => ({
    users: () => [
      {
        id: "1",
        name: "Hari",
        address: "Butwal"
      }
    ],
    books: () => [
      {
        id: "1",
        authors: [  
          {
            id: "2",
            name: "Ram",
            address: "Butwal"
          }
        ],
        price: 13.5  
      }
    ]
  })
};
