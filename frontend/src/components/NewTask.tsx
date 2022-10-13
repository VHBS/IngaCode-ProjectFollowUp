import React, { useEffect, useState } from 'react';

import { AuthContextType } from '../@types/authContext';
import IProject from '../@types/project';
import useAuth from '../hooks/useAuth';
import { handleFetchCreateTask, handleFetchGetAllProjects } from '../utils/api';

type PropType = {
  props: {
    setShowModalNewTask: (showModalNewProject: boolean) => void
    handleLoadTasks: () => Promise<void>
  }
}

export default function NewTask({
  props: {
    handleLoadTasks,
    setShowModalNewTask,
  },
}: PropType): JSX.Element {
  const [projects, setProjects] = useState<IProject[] | null>(null);
  const [newTaskProjectId, setNewTaskProjectId] = useState<string | null>(null);
  const [newTaskDescription, setNewTaskDescription] = useState<string>('');
  const [newTaskName, setNewTaskName] = useState<string>('');
  const [messageError, setMessageError] = useState<string>('');
  const [showMessageError, setShowMessageError] = useState<boolean>(false);
  const { userData, setUserData } = useAuth() as AuthContextType;

  const handleShowMessageError = () => {
    if (!newTaskName) {
      setMessageError('Insert a task name!');
      setShowMessageError(true);
    }
    if (!newTaskDescription) {
      setMessageError('Insert a task description!');
      setShowMessageError(true);
    }
  };

  const validateNewTaskField = () => {
    if (newTaskProjectId && newTaskName && newTaskDescription) return true;
    handleShowMessageError();
    return false;
  };

  const handleLoadProjects = async () => {
    const response = await handleFetchGetAllProjects(userData?.token as string);
    if ('message' in response) return setUserData(null);
    setProjects(response.sort((a, b) => a.name.localeCompare(b.name)));
    setNewTaskProjectId(response[0].id);
  };

  const handleCreateTask = async () => {
    if (validateNewTaskField()) {
      const taskToCreate = {
        name: newTaskName,
        description: newTaskDescription,
        projectId: newTaskProjectId as string,
      };
      await handleFetchCreateTask(userData?.token as string, taskToCreate);
      await handleLoadTasks();
    }
  };

  useEffect(() => {
    handleLoadProjects();
  }, []);

  return (
    <div>
      <h1>NewTask</h1>
      {showMessageError && <p>{messageError}</p>}
      <label htmlFor="task-name">
        <span>Task Name:</span>
        <input
          id="task-name"
          type="text"
          onChange={({ target: { value } }) => setNewTaskName(value)}
          value={newTaskName}
        />
      </label>
      <br />
      <label htmlFor="select-project-name">
        <span>Project Name:</span>
        <select
          id="select-project-name"
          onChange={({ target: { value } }) => setNewTaskProjectId(value)}
        >
          { projects?.map((project) => (
            <option
              key={project.id}
              value={project.id}
            >
              {project.name}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label htmlFor="task-description">
        <span>Task Description:</span>
        <textarea
          id="task-description"
          onChange={({ target: { value } }) => setNewTaskDescription(value)}
          value={newTaskDescription}
        />
      </label>
      <button type="button" onClick={handleCreateTask}>
        Create Task
      </button>
      <button type="button" onClick={() => setShowModalNewTask(false)}>
        Close
      </button>
    </div>
  );
}
