const resolvers = {
  Query: {
    getUser: async (parent, args, { dataSources }, info) => {
      const { id } = args;
      return dataSources.myAPI.getUser(id);
    },
    getUsers: async (parent, args, { dataSources }, info) => {
      // or we can do (parent , {ids}, {dataSources} , info) directly
      const { ids } = args;
      return Promise.all(ids.map((id) => dataSources.myAPI.getUser(id)));
    },
  },
};

export default resolvers;

//for multiple data update
// getUsers : async (parent , args, {dataSources} , info) =>{ // or we can do (parent , {ids}, {dataSources} , info) directly
// const {ids} = args;
// return Promise.all(ids.map(id => dataSources.myAPI.getUser(id)));
// }


//now change in your frontend component
