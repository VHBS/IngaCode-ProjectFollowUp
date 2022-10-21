import React, { useEffect, useState } from 'react';

import { AuthContextType } from '../@types/authContext';
import IProject from '../@types/project';
import useAuth from '../hooks/useAuth';
import {
  Button, Input, Label, Select, Textarea,
} from '../styles/default';
import { NewItemComponent, NewItemContainer, NewProjectTitle } from '../styles/NewRegistry';
import { handleFetchCreateTask, handleFetchGetAllProjects } from '../utils/api';

type PropType = {
  props: {
    setShowModalNewItem: (showModalNewProject: boolean) => void
    handleReload: () => Promise<void>
    showModalNewItem: boolean
  }
}

export default function NewTask({
  props: {
    handleReload,
    setShowModalNewItem,
    showModalNewItem,
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
      await handleReload();
      setShowModalNewItem(false);
    }
  };

  useEffect(() => {
    handleLoadProjects();
  }, []);

  return (
    <NewItemComponent showModal={showModalNewItem}>
      <NewItemContainer>
        <NewProjectTitle>
          New Task
        </NewProjectTitle>

        {showMessageError && (
        <p className="error-message">
          {messageError}
          <span>*</span>
        </p>
        )}

        <Label htmlFor="select-project-name">
          <span>Project Name:</span>
          <Select
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
          </Select>
        </Label>

        <Label htmlFor="task-name">
          <span>Task Name:</span>
          <Input
            autoComplete="off"
            id="task-name"
            type="text"
            onChange={({ target: { value } }) => setNewTaskName(value)}
            value={newTaskName}
          />
        </Label>

        <Label htmlFor="task-description">
          <span>Task Description:</span>
          <Textarea
            autoComplete="off"
            id="task-description"
            onChange={({ target: { value } }) => setNewTaskDescription(value)}
            value={newTaskDescription}
          />
        </Label>

        <div className="title-container-buttons">
          <Button
            type="button"
            onClick={handleCreateTask}
          >
            Create Task
          </Button>
          <Button
            type="button"
            onClick={() => setShowModalNewItem(false)}
          >
            Close
          </Button>
        </div>
      </NewItemContainer>
    </NewItemComponent>
  );
}
