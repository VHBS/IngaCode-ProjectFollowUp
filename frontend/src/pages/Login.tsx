import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import useAuth from '../hooks/useAuth';

export default function Login(): JSX.Element {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const { handleLogin, userData } = useAuth() as AuthContextType;

  useEffect(() => {
    if (userData !== null && 'token' in userData) {
      return navigate('/');
    }
  }, [userData, navigate]);

  return (
    <div>
      <label htmlFor="userName">
        User Name:
        <input id="userName" type="text" onChange={({ target: { value } }) => setUserName(value)} />
      </label>
      <label htmlFor="password">
        Password:
        <input id="password" type="password" onChange={({ target: { value } }) => setPassword(value)} />
      </label>
      <button type="button" onClick={() => handleLogin(userName, password)}>Log In</button>
    </div>
  );
}
