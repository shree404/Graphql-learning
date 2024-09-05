


import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.js';
import  resolvers  from './resolver.js';
import MyAPI from './datasources/books-api.js';


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    myAPI: new MyAPI(),
  }),
});


server.listen().then(({ url }) => {
  console.log(` Server ready at ${url}`);
});

