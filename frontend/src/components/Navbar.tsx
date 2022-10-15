import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import useAuth from '../hooks/useAuth';
import { Button } from '../styles/default';
import { ButtonsContainer, NavBarComponent } from '../styles/NavBar';

export default function Navbar() {
  const navigate = useNavigate();
  const { userData, setUserData } = useAuth() as AuthContextType;

  return (
    <NavBarComponent>
      <h5>
        🧑‍💻
        {' '}
        {userData?.user.userName}
      </h5>
      <ButtonsContainer>

        <Button
          type="button"
          onClick={() => navigate('/projects')}
        >
          Projects
        </Button>
        <Button
          type="button"
          onClick={() => navigate('/tasks')}
        >
          Tasks
        </Button>
        <Button
          type="button"
          onClick={() => setUserData(null)}
        >
          Log Out
        </Button>
      </ButtonsContainer>

    </NavBarComponent>
  );
}
