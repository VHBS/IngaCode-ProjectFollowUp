import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import CopyrightImage from '../components/CopyrightImage';
import useAuth from '../hooks/useAuth';
import { Button, Input, Label } from '../styles/default';
import { ContainerInput, LoginPage } from '../styles/Login';

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
    <LoginPage>
      <ContainerInput>
        <Label htmlFor="userName">
          <span>
            User Name:
          </span>
          <Input
            autoComplete="off"
            id="userName"
            type="text"
            onChange={({ target: { value } }) => setUserName(value)}
          />
        </Label>

        <Label htmlFor="password">
          <span>
            Password:
          </span>
          <Input
            id="password"
            type="password"
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </Label>

        <Button
          type="button"
          onClick={() => handleLogin(userName, password)}
        >
          Log In

        </Button>
      </ContainerInput>
      <CopyrightImage author="@szmigieldesign" />
    </LoginPage>
  );
}
