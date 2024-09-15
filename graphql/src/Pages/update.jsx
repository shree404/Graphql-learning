import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

// Corrected mutation definition
const UPDATE_USER_NAME = gql`
  mutation UpdateUserName($id: ID!, $update: UpdateUserInput!) {
    updateUserName(id: $id, update: $update) {
      name
      email
    }
  }
`;

function UpdateUser() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const [updateUserName, { data, loading, error }] = useMutation(UPDATE_USER_NAME);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserName({ variables: { id, update: { name, email } } });
    setId('');
    setName('');
    setEmail('');
  };

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  if (data) return <p>User {data.updateUserName.name} updated</p>;

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
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default UpdateUser;
