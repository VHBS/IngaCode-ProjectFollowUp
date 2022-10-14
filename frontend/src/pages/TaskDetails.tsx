import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import ITask from '../@types/task';
import Navbar from '../components/Navbar';
import UpdateTask from '../components/UpdateTask';
import useAuth from '../hooks/useAuth';
import { handleFetchDeleteTask, handleFetchGetOneTask } from '../utils/api';

export default function TaskDetails(): JSX.Element {
  const [task, setTask] = useState<ITask | null>(null);
  const [showModalUpdateTask, setShowModalUpdateTask] = useState<boolean>(false);
  const { userData, setUserData } = useAuth() as AuthContextType;
  const { id } = useParams();
  const navigate = useNavigate();

  const handleLoadTask = async () => {
    const response = await handleFetchGetOneTask(userData?.token as string, id as string);

    if ('message' in response) {
      return setUserData(null);
    }

    setTask(response);
  };

  const handleDeleteTask = async () => {
    await handleFetchDeleteTask(userData?.token as string, id as string);
    navigate('/tasks');
  };

  useEffect(() => {
    handleLoadTask();
  }, []);

  return (
    <div>
      <Navbar />
      {showModalUpdateTask && (
      <UpdateTask props={{
        handleLoadTask,
        setShowModalUpdateTask,
      }}
      />
      )}

      <button type="button" onClick={() => setShowModalUpdateTask(!showModalUpdateTask)}>
        Edit Task
      </button>
      <button type="button" onClick={() => handleDeleteTask()}>
        Delete Task
      </button>
      <div>
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
      <div>
        <h3>🙎‍♀️💻🙎 Collaborators</h3>
        {task?.collaborators?.map((collaborator) => (
          <h5 key={collaborator.id}>
            {collaborator.name}
          </h5>
        ))}
      </div>
    </div>
  );
}
