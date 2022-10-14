import React, { useEffect, useState } from 'react';

import { AuthContextType } from '../@types/authContext';
import ITask from '../@types/task';
import CardTask from '../components/CardTask';
import Navbar from '../components/Navbar';
import NewTask from '../components/NewTask';
import useAuth from '../hooks/useAuth';
import { handleFetchGetAllTasks } from '../utils/api';

export default function Task(): JSX.Element {
  const [showModalNewTask, setShowModalNewTask] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITask[] | null>(null);
  const [filterTaskByName, setFilterTaskByName] = useState<string>('');
  const [filterTaskByProjectName, setFilterTaskByProjectName] = useState<string>('');
  const [filterTaskByCollaboratorName, setFilterTaskByCollaboratorName] = useState<string>('');

  const { userData, setUserData } = useAuth() as AuthContextType;

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
      <button type="button" onClick={() => setShowModalNewTask(!showModalNewTask)}>
        New Task
      </button>
      {showModalNewTask && <NewTask props={{ handleLoadTasks, setShowModalNewTask }} />}
      <h1>Tasks</h1>
      <label htmlFor="filter-task-by-name">
        Filter by task name:
        <input
          id="filter-task-by-name"
          type="text"
          onChange={({ target: { value } }) => setFilterTaskByName(value.toLowerCase())}
        />
      </label>

      <br />
      <label htmlFor="filter-task-by-project-name">
        Filter by project name:
        <input
          id="filter-task-by-project-name"
          type="text"
          onChange={({ target: { value } }) => setFilterTaskByProjectName(value.toLowerCase())}
        />
      </label>

      <br />
      <label htmlFor="filter-task-by-collaborator-name">
        Filter by collaborator name:
        <input
          id="filter-task-by-collaborator-name"
          type="text"
          onChange={({ target: { value } }) => setFilterTaskByCollaboratorName(value.toLowerCase())}
        />
      </label>

      { tasks?.filter(({ name }) => name.toLowerCase().includes(filterTaskByName))
        .filter(({ project }) => project?.name.toLocaleLowerCase()
          .includes(filterTaskByProjectName))
        .filter(({ collaborators }) => collaborators?.some((collaborator) => collaborator.name
          .toLowerCase().includes(filterTaskByCollaboratorName)))
        .map((task) => (
          <CardTask key={task.id} props={{ task, showProjectName: true }} />
        ))}
    </div>
  );
}
