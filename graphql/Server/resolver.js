import users from './data/data.js';

const user = [
];

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
  Mutation : {
    addUser: (parent, { id, name, email }) => {
      const newUser = { id, name, email };
      user.push(newUser);
      console.log(newUser)
      return newUser;
    },
    updateUserName: (_, { id, update }) => {
      if (!users) {
        throw new Error("User database is not properly initialized.");
      }
      const updatedUsers = users.map((user) => {
        if (user.id === id) {
          return { ...user, ...update }; 
        }
        return user;
      });
      users.length = 0; 
      users.push(...updatedUsers); 
      return updatedUsers.find((user) => user.id === id);
    },

  },
  }

export default resolvers;

//for multiple data update
// getUsers : async (parent , args, {dataSources} , info) =>{ // or we can do (parent , {ids}, {dataSources} , info) directly
// const {ids} = args;
// return Promise.all(ids.map(id => dataSources.myAPI.getUser(id)));
// }


//now change in your frontend component
