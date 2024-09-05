import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Book from './book.jsx';
import './books.css'
import { useEffect, useState } from 'react';


const BOOKS = gql`
  query GETBOOKS {
    books {
      id
      price
      authors {
        name
        id
        address
      }
    }
  }
`;

export const Books = () => {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='Books'>
      {data?.books?.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};
