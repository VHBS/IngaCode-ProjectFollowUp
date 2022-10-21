import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import useAuth from '../hooks/useAuth';
import { Button, Input, Label } from '../styles/default';
import { EditItemComponent, EditItemContainer, EditItemTitle } from '../styles/ProjectDetails';
import { handleFetchUpdateProject } from '../utils/api';

type PropType = {
  props: {
    setShowModalUpdateProject: (showModalNewProject: boolean) => void
    handleLoadProject: () => Promise<void>
    showModal: boolean
  }
}

export default function UpdateProject({
  props: {
    setShowModalUpdateProject,
    handleLoadProject,
    showModal,
  },
}: PropType): JSX.Element {
  const { id } = useParams();

  const [projectName, setProjectName] = useState<string>('');
  const [showMessageError, setShowMessageError] = useState<boolean>(false);
  const { userData } = useAuth() as AuthContextType;

  const validateNewProjectFields = (): boolean => {
    if (projectName.length > 0) return true;
    return false;
  };

  const handleUpdateProject = async () => {
    if (validateNewProjectFields() && userData) {
      await handleFetchUpdateProject(userData.token, id as string, { name: projectName });
      setProjectName('');
      await handleLoadProject();
      return setShowModalUpdateProject(false);
    }
    return setShowMessageError(true);
  };

  return (
    <EditItemComponent showModal={showModal}>
      <EditItemContainer>

        <EditItemTitle>
          Edit Project
        </EditItemTitle>
        { showMessageError && (
        <p className="error-message">
          Insert a project name!
          <span>*</span>
        </p>
        )}
        <Label htmlFor="name">
          <span>📋 Update Project Name:</span>
          <Input
            id="name"
            type="text"
            onChange={({ target: { value } }) => setProjectName(value)}
            value={projectName}
          />
        </Label>
        <div className="title-container-buttons">

          <Button type="button" onClick={() => handleUpdateProject()}>
            Update Project
          </Button>
          <Button type="button" onClick={() => setShowModalUpdateProject(false)}>
            Close
          </Button>
        </div>
      </EditItemContainer>

    </EditItemComponent>
  );
}
