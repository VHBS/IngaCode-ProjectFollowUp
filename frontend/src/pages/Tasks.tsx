import React, { useEffect, useState } from 'react';

import { AuthContextType } from '../@types/authContext';
import ITask from '../@types/task';
import CardTask from '../components/CardTask';
import Navbar from '../components/Navbar';
import NewTask from '../components/NewTask';
import useAuth from '../hooks/useAuth';
import { Button, Input, Label } from '../styles/default';
import { CardsContainer, FilterContainer, TitlePage } from '../styles/PageCards';
import { TasksPage } from '../styles/Task';
import { handleFetchGetAllTasks } from '../utils/api';

export default function Tasks(): JSX.Element {
  const [showModalNewTask, setShowModalNewTask] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITask[] | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);
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
    <TasksPage>
      <Navbar />
      <TitlePage>
        <h1>Tasks</h1>
        <div className="title-container-buttons">

          <Button type="button" onClick={() => setShowModalNewTask(!showModalNewTask)}>
            New Task
          </Button>
          <Button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
          </Button>
        </div>

      </TitlePage>
      {showModalNewTask && <NewTask props={{ handleLoadTasks, setShowModalNewTask }} />}

      {showFilters && (
      <FilterContainer>
        <Label htmlFor="filter-task-by-name">
          <span>Filter by task name:</span>
          <Input
            id="filter-task-by-name"
            type="text"
            onChange={({ target: { value } }) => setFilterTaskByName(value.toLowerCase())}
          />
        </Label>

        <Label htmlFor="filter-task-by-project-name">
          <span>Filter by project name:</span>
          <Input
            id="filter-task-by-project-name"
            type="text"
            onChange={({ target: { value } }) => setFilterTaskByProjectName(value.toLowerCase())}
          />
        </Label>

        <Label htmlFor="filter-task-by-collaborator-name">
          <span>Filter by collaborator name:</span>
          <Input
            id="filter-task-by-collaborator-name"
            type="text"
            onChange={({ target: { value } }) => setFilterTaskByCollaboratorName(value
              .toLowerCase())}
          />
        </Label>
      </FilterContainer>
      )}
      <CardsContainer>
        { tasks?.filter(({ name }) => name.toLowerCase().includes(filterTaskByName))
          .filter(({ project }) => project?.name.toLocaleLowerCase()
            .includes(filterTaskByProjectName))
          .filter(({ collaborators }) => {
            if (filterTaskByCollaboratorName === '' && collaborators?.length === 0) return true;
            return collaborators?.some((collaborator) => collaborator.name
              .toLowerCase().includes(filterTaskByCollaboratorName));
          })
          .map((task) => (
            <CardTask key={task.id} props={{ task, showProjectName: true }} />
          ))}
      </CardsContainer>
    </TasksPage>
  );
}
