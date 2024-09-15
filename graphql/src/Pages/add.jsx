import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const ADD_USER = gql`
  mutation AddUser($id: ID!, $name: String!, $email: String!) {
    addUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

function AddUser() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const [addUser, { data, loading, error }] = useMutation(ADD_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ variables: { id, name, email } });
    setId('');
    setName('');
    setEmail('');
  };

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  if (data) return <p> user {data.addUser.name} Added</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={e => setId(e.target.value)}
        /> <br/>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        /> <br/>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /> <br/>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
