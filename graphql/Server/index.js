
// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
// import { typeDefs } from './schema.js';
// // import { typeDefs, mocks } from './schema.js';  
// // import {addMocksToSchema} from '@graphql-tools/mock';
// // import { makeExecutableSchema } from '@graphql-tools/schema';
// import resolvers from './resolver.js'
// import  BOOKAPI from './datasources/books-api.js';

// async function startApolloServer() {
//     const server = new ApolloServer({ 
//       typeDefs,
//   resolvers,
//       //  schema: addMocksToSchema({
//       //   schema: makeExecutableSchema({ typeDefs }),mocks
//       // }),
//      });  
//     // const { url } = await startStandaloneServer(server);

//     const { url } = await startStandaloneServer(server ,{
//       context : async () => {
//         const {cache} = server
//         return{
//           dataSources : {
//             bookAPI : new BOOKAPI({cache}),
//           }
//         }
//       }
//     });

//     console.log(`
//         Server is running!
//           Query at ${url}
//     `);
// }

// startApolloServer();


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

