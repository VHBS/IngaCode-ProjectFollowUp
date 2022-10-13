import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import ITask from '../@types/task';
import Navbar from '../components/Navbar';
import useAuth from '../hooks/useAuth';
import { handleFetchGetOneTask } from '../utils/api';

export default function TaskDetails(): JSX.Element {
  const [task, setTask] = useState<ITask | null>(null);
  const { userData, setUserData } = useAuth() as AuthContextType;
  const { id } = useParams();

  const handleLoadTask = async () => {
    const response = await handleFetchGetOneTask(userData?.token as string, id as string);

    if ('message' in response) {
      return setUserData(null);
    }

    setTask(response);
  };

  useEffect(() => {
    handleLoadTask();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>
        📝
        {task?.name}
      </h1>
      <h4>
        📋
        {task?.project?.name}
      </h4>
      <p>{task?.description}</p>
    </div>
  );
}
