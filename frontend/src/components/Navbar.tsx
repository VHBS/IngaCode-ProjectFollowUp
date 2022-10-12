import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import useAuth from '../hooks/useAuth';

export default function Navbar() {
  const navigate = useNavigate();
  const { setUserData } = useAuth() as AuthContextType;

  return (
    <div>
      <button type="button" onClick={() => setUserData(null)}>Log Out</button>
      <button type="button" onClick={() => navigate('/projects')}>Projects</button>
    </div>
  );
}
