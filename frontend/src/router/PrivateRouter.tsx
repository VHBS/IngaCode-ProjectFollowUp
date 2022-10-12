import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import useAuth from '../hooks/useAuth';

export default function PrivateRouter() {
  const { userData } = useAuth() as AuthContextType;

  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
