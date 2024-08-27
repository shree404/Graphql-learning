
import { gql } from 'graphql-tag';

 export const typeDefs = gql`
  type Query {
    users: [User]
    books : [Book]
  }

  """User is a group of users of the Systems"""
  type User {
    id: ID!
    name: String!
    address: String!
  }

  type Book {
  id: ID!
  authors : Author
  Price : Float!
  }

  type Author{
  id:ID!
  name : String!
  address : String!
  }
`;


//mock example
export const mocks = {
    User: () => ({
      id : () => "1",
      name : () => "Hari",
      address : () => "Butwal" 
    })
  };

