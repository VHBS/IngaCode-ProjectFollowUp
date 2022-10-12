import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import useAuth from '../hooks/useAuth';

export default function Home(): JSX.Element {
  const navigate = useNavigate();
  const { userData, setUserData } = useAuth() as AuthContextType;

  useEffect(() => {
    if (userData === null) {
      return navigate('/login');
    }
  }, [userData]);

  return (
    <div className="App">
      <button type="button" onClick={() => setUserData(null)}>Log Out</button>
      <button type="button" onClick={() => navigate('/projects')}>Projects</button>
    </div>
  );
}
