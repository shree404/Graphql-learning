import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();


app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));


const typeDefs = gql`
  type Query {
    someField: [SomeType]
  }
  
  type SomeType {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Query: {
    someField: () => [],
  },
};


const server = new ApolloServer({ typeDefs, resolvers });


async function startServer() {
  await server.start(); 
  server.applyMiddleware({ app }); 

  app.listen({ port: 4000 }, () => {
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
  });
}


// startServer();
