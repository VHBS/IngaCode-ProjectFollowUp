import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import IProject from '../@types/project';
import useAuth from '../hooks/useAuth';
import {
  Button,
  Input, Label, Select, Textarea,
} from '../styles/default';
import { NewItemComponent, NewItemContainer, NewProjectTitle } from '../styles/NewRegistry';
import { handleFetchGetAllProjects, handleFetchUpdateTask } from '../utils/api';

type PropType = {
  props: {
    setShowModalUpdateTask: (showModalNewProject: boolean) => void
    handleLoadTask: () => Promise<void>
    showModal: boolean
  }
}

export default function UpdateTask({
  props: {
    setShowModalUpdateTask,
    handleLoadTask,
    showModal,
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
    if (!updateTaskName) {
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
    <NewItemComponent showModal={showModal}>
      <NewItemContainer>

        <NewProjectTitle>Edit Task</NewProjectTitle>
        {showMessageError && (
        <p className="error-message">
          {messageError}
          <span>*</span>
        </p>
        )}
        <Label htmlFor="name">
          <span>Update Project Name:</span>
          <Input
            id="name"
            type="text"
            onChange={({ target: { value } }) => setUpdateTaskName(value)}
            value={updateTaskName}
          />
        </Label>

        <Label htmlFor="select-project-name">
          <span>Project Name:</span>
          <Select
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
          </Select>
        </Label>

        <Label htmlFor="task-description">
          <span>Task Description:</span>
          <Textarea
            id="task-description"
            onChange={({ target: { value } }) => setUpdateTaskDescription(value)}
            value={updateTaskDescription}
          />
        </Label>

        <div className="title-container-buttons">
          <Button type="button" onClick={handleUpdateTask}>
            Update Task
          </Button>
          <Button type="button" onClick={() => setShowModalUpdateTask(false)}>
            Close
          </Button>
        </div>

      </NewItemContainer>

    </NewItemComponent>
  );
}
