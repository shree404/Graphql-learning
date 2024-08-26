
import { gql } from 'graphql-tag';

 export const typeDefs = gql`
  type Query {
    users: [User]
  }

  """User is a group of users of the Systems"""
  type User {
    id: ID!
    name: String!
    address: String!
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

