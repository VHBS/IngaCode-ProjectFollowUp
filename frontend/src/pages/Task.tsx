import React, { useEffect, useState } from 'react';

import { AuthContextType } from '../@types/authContext';
import ITask from '../@types/task';
import CardTask from '../components/CardTask';
import Navbar from '../components/Navbar';
import useAuth from '../hooks/useAuth';
import { handleFetchGetAllTasks } from '../utils/api';

export default function Task(): JSX.Element {
  const { userData, setUserData } = useAuth() as AuthContextType;

  const [tasks, setTasks] = useState<ITask[] | null>(null);

  const handleLoadTasks = async () => {
    const response = await handleFetchGetAllTasks(userData?.token as string);

    if ('message' in response) {
      return setUserData(null);
    }

    setTasks(response.sort((a, b) => new Date(a.createdAt).getTime()
    - new Date(b.createdAt).getTime()));
  };

  useEffect(() => {
    handleLoadTasks();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Tasks</h1>

      {tasks?.map((task) => (
        <CardTask key={task.id} props={{ task }} />
      ))}
    </div>
  );
}
