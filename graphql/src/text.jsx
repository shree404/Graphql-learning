// src/MyComponent.js
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DATA } from './queries';
import Spinner from 'react-bootstrap/Spinner';
import './text.css';

function MyComponent() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return  <div className='loader'>
    <div className='input skeleton'></div> <div className='button skeleton'></div>
  </div>
  if (error) return <p>Error: {error.message}</p>;  

  if (!data || !data.someField) return <p>No data available</p>;

  const [formdata , setFormdata] = useState({
    name : '',
  })


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };


const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data Submitted:', formdata);
  };

  return (
    <div>
      {data.someField.length === 0 ? (
       <div>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Your Name' name='name' value={formdata.name} onChange={handleChange} />
        <button onClick={handleSubmit} >Submit</button>
       </div>
      ) : (
        data.someField.map(({ id, name }) => (
          <div key={id}>
            <p>{name}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyComponent;
