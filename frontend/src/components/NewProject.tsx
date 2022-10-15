import React, { useState } from 'react';

import { AuthContextType } from '../@types/authContext';
import useAuth from '../hooks/useAuth';
import { Button, Input, Label } from '../styles/default';
import { NewItemComponent, NewItemContainer, NewProjectTitle } from '../styles/NewRegistry';
import { handleFetchCreateProject } from '../utils/api';

type PropType = {
    props: {
      setShowModalNewProject: (showModalNewProject: boolean) => void
      handleLoadProjects: () => Promise<void>
    }
}

export default function NewProject({
  props: { setShowModalNewProject, handleLoadProjects },
}: PropType): JSX.Element {
  const [projectName, setProjectName] = useState<string>('');
  const [showMessageError, setShowMessageError] = useState<boolean>(false);
  const { userData } = useAuth() as AuthContextType;

  const validateNewProjectFields = (): boolean => {
    if (projectName.length > 0) return true;
    return false;
  };

  const handleCreateNewProject = async () => {
    if (validateNewProjectFields() && userData) {
      await handleFetchCreateProject(userData.token, { name: projectName });
      await handleLoadProjects();
      setProjectName('');
      return setShowMessageError(false);
    }
    return setShowMessageError(true);
  };

  return (
    <NewItemComponent>
      <NewItemContainer>
        <NewProjectTitle>
          New Project
        </NewProjectTitle>
        { showMessageError && <p>Insert a project name! </p>}
        <Label htmlFor="name">
          <span>
            📋 Project Name:
          </span>
          <Input
            id="name"
            type="text"
            onChange={({ target: { value } }) => setProjectName(value)}
            value={projectName}
          />
        </Label>
        <div className="title-container-buttons">
          <Button type="button" onClick={() => handleCreateNewProject()}>
            Create
          </Button>
          <Button type="button" onClick={() => setShowModalNewProject(false)}>
            Close
          </Button>
        </div>
      </NewItemContainer>

    </NewItemComponent>
  );
}
