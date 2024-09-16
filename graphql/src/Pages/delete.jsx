import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      email
    }
  }
`;

function DeleteUser() {
  const [id, setId] = useState("");
  const [deleteUser, { data, loading, error }] = useMutation(DELETE_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteUser({ variables: { id } });
    setId("");
  };

  if (loading) return <p>Deleting...</p>;
  if (error) return <p>Deleting Error! {error.message}</p>;
  if (data) return <p>User with ID {data.deleteUser.id} was deleted successfully.</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Delete User</button>
      </form>
    </div>
  );
}

export default DeleteUser;
