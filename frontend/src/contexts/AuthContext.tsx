import PropTypes from 'prop-types';
import React, {
  createContext, useMemo, useState,
} from 'react';

import { AuthContextType } from '../@types/authContext';
import { ResponseError } from '../@types/responseError';
import { UserLoginType } from '../@types/user';
import { handleUserLogin } from '../utils/api';

const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [userData, setUserData] = useState<UserLoginType | null>(null);

  const handleLogin = async (
    userName: string,
    password: string,
  ): Promise<UserLoginType | ResponseError> => {
    const responseUserLogin = await handleUserLogin(userName, password);
    if ('token' in responseUserLogin) {
      setUserData(responseUserLogin);
      return responseUserLogin;
    }

    return responseUserLogin;
  };

  const valueMemo = useMemo(() => ({ handleLogin, userData, setUserData }), [userData]);
  return (
    <AuthContext.Provider value={valueMemo}>
      { children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
