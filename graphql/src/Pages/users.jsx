import React from 'react';
import { gql, useQuery } from '@apollo/client';



const GET_USERS = gql`
  query GetUsers($ids: [ID!]!) {
    getUsers(ids: $ids) {
      id
      name
      email
    }
  }
`;

const UserList = ({ userIds }) => {
  const { loading, error, data } = useQuery(GET_USERS, {
    variables: { ids: userIds },
  });

  if (loading) return <p>Please wait, data is loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.getUsers.length > 0 ? (
        data.getUsers.map(user => (
          <div key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

const Users = () => {
  const userIds = ["1", "2", "3", "4"];
  return <UserList userIds={userIds} />;
};

export default Users;

// single Id fetch 
// const GET_USERS = gql
//   query GetUsers {
//     getUser(id: "3") {
//       id
//       name
//       email
//     }
//   }
// ;