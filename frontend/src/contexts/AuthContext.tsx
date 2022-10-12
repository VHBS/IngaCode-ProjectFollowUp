import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { AuthContextType } from '../@types/authContext';
import { UserLoginType } from '../@types/user';
import { handleUserLogin } from '../utils/api';

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<UserLoginType | null>(null);

  const handleLogin = async (email: string, password: string) => {      
      const responseUserLogin = await handleUserLogin(email, password);
      
      if ('token' in responseUserLogin) {
        setUserData(responseUserLogin)
      }
      
      return responseUserLogin;
  }


  return (
    <AuthContext.Provider value={ { handleLogin, userData, setUserData } }>
      { children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };