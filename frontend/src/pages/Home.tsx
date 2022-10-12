import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import Navbar from '../components/Navbar';
import useAuth from '../hooks/useAuth';

export default function Home(): JSX.Element {
  const navigate = useNavigate();
  const { userData } = useAuth() as AuthContextType;

  useEffect(() => {
    if (userData === null) {
      return navigate('/login');
    }
  }, [userData]);

  return (
    <div>
      <Navbar />
    </div>
  );
}
