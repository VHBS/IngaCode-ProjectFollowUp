import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import useAuth from '../hooks/useAuth';

export default function Navbar() {
  const navigate = useNavigate();
  const { userData, setUserData } = useAuth() as AuthContextType;

  return (
    <div>
      <h5>{userData?.user.userName}</h5>
      <button
        type="button"
        onClick={() => navigate('/projects')}
      >
        Projects
      </button>
      <button
        type="button"
        onClick={() => navigate('/tasks')}
      >
        Tasks
      </button>
      <button
        type="button"
        onClick={() => setUserData(null)}
      >
        Log Out
      </button>
    </div>
  );
}
