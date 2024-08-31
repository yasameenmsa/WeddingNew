import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './baseURL';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    await axios.post(`${BASE_URL}/register`, { username, password });
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
