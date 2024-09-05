import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Book from './book.jsx';
import './books.css'
import { useEffect, useState } from 'react';


const GET_USERS = gql`
  query GetUsers {
    getUser(id: "1") {
      id
      name
      email
    }
  }
`;

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Please wait, data is loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data?.getUser && (
        <div>
          <p>ID: {data.getUser.id}</p>
          <p>Name: {data.getUser.name}</p>
          <p>Email: {data.getUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default Users;
