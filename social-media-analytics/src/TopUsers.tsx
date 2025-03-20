import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopUsers: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/top-users')
      .then(response => {
        console.log(response.data);  // Check the response in the console
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        alert("Error fetching users!"); // Optional alert for debugging
      });
  }, []);
  

  return (
    <div>
      <h1>Top Users</h1>
      <ul>
        {users.map((user: any, index: number) => (
          <li key={index}>{user.name} - {user.posts} posts</li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
