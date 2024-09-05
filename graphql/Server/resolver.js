// const resolvers = {
//     Query: {
//       getBooks: (_, __, { dataSources }) => dataSources.bookAPI.getBooks(),
//       users: (_, __, { dataSources }) => dataSources.bookAPI.getUsers()
//     },
//     Book: {
//       authors: (book, _, { dataSources }) => dataSources.bookAPI.getAuthors(book.id)
//     }
//   };

// import { Users } from "../src/Pages/books";

  
//   export default resolvers;


const resolvers = {
  Query: {
    getUser: async (parent, args, { dataSources }, info) => {
      const { id } = args;
      return dataSources.myAPI.getUser(id);
    }
  }
};

export default resolvers;
  