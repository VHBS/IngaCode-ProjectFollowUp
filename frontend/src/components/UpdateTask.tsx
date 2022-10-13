import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import IProject from '../@types/project';
import useAuth from '../hooks/useAuth';
import { handleFetchGetAllProjects, handleFetchUpdateTask } from '../utils/api';

type PropType = {
  props: {
    setShowModalUpdateTask: (showModalNewProject: boolean) => void
    handleLoadTask: () => Promise<void>
  }
}

export default function UpdateTask({
  props: {
    setShowModalUpdateTask,
    handleLoadTask,
  },
}: PropType): JSX.Element {
  const [projects, setProjects] = useState<IProject[] | null>(null);
  const [updateTaskProjectId, seUpdateTaskProjectId] = useState<string | null>(null);
  const [updateTaskName, setUpdateTaskName] = useState<string>('');
  const [updateTaskDescription, setUpdateTaskDescription] = useState<string>('');

  const [messageError, setMessageError] = useState<string>('');
  const [showMessageError, setShowMessageError] = useState<boolean>(false);
  const { userData, setUserData } = useAuth() as AuthContextType;
  const { id } = useParams();

  const handleShowMessageError = () => {
    if (!updateTaskProjectId) {
      setMessageError('Insert a task name!');
      setShowMessageError(true);
    }
    if (!updateTaskDescription) {
      setMessageError('Insert a task description!');
      setShowMessageError(true);
    }
  };

  const validateNewTaskField = () => {
    if (updateTaskProjectId && updateTaskName && updateTaskDescription) return true;
    handleShowMessageError();
    return false;
  };

  const handleLoadProjects = async () => {
    const response = await handleFetchGetAllProjects(userData?.token as string);
    if ('message' in response) return setUserData(null);
    setProjects(response.sort((a, b) => a.name.localeCompare(b.name)));
    seUpdateTaskProjectId(response[0].id);
  };

  const handleUpdateTask = async () => {
    if (validateNewTaskField()) {
      const taskToCreate = {
        name: updateTaskName,
        description: updateTaskDescription,
        projectId: updateTaskProjectId as string,
      };
      await handleFetchUpdateTask(userData?.token as string, taskToCreate, id as string);
      await handleLoadTask();
      setShowModalUpdateTask(false);
    }
  };

  useEffect(() => {
    handleLoadProjects();
  }, []);

  return (
    <div>
      <h1>Edit Task</h1>
      {showMessageError && <p>{messageError}</p>}
      <label htmlFor="name">
        Update Project Name:
        <input
          id="name"
          type="text"
          onChange={({ target: { value } }) => setUpdateTaskName(value)}
          value={updateTaskName}
        />
      </label>
      <br />
      <label htmlFor="select-project-name">
        <span>Project Name:</span>
        <select
          id="select-project-name"
          onChange={({ target: { value } }) => seUpdateTaskProjectId(value)}
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
          onChange={({ target: { value } }) => setUpdateTaskDescription(value)}
          value={updateTaskDescription}
        />
      </label>
      <button type="button" onClick={handleUpdateTask}>
        Update Task
      </button>
      <button type="button" onClick={() => setShowModalUpdateTask(false)}>
        Close
      </button>
    </div>
  );
}
