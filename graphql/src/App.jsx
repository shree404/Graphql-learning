import React from 'react';
import Users from './Pages/users.jsx'; 
import AddUser from './Pages/add.jsx';
import UpdateUser from './Pages/update.jsx';
import DeleteUser from './Pages/delete.jsx';

function App() {
  return (
    
      <div>
        <h3>User List</h3>
        {/* <Users /> */}
        {/* <AddUser/> */}
       {/* <UpdateUser/> */}
       <DeleteUser/>
      </div>
  );
}

export default App;
