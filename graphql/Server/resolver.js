const resolvers = {
    Query: {
      getBooks: (_, __, { dataSources }) => dataSources.bookAPI.getBooks(),
      users: (_, __, { dataSources }) => dataSources.bookAPI.getUsers()
    },
    Book: {
      authors: (book, _, { dataSources }) => dataSources.bookAPI.getAuthors(book.id)
    }
  };
  
  export default resolvers;
  