import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import useAuth from '../hooks/useAuth';
import { handleFetchUpdateProject } from '../utils/api';

type PropType = {
  props: {
    setShowModalUpdateProject: (showModalNewProject: boolean) => void
    handleLoadProject: () => Promise<void>
  }
}

export default function UpdateProject({
  props: {
    setShowModalUpdateProject,
    handleLoadProject,
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
    <div>
      <h1>
        Edit Project
      </h1>
      { showMessageError && <p>Insert a project name! </p>}
      <label htmlFor="name">
        Update Project Name:
        <input
          id="name"
          type="text"
          onChange={({ target: { value } }) => setProjectName(value)}
          value={projectName}
        />
      </label>
      <button type="button" onClick={() => handleUpdateProject()}>
        Update Project
      </button>
      <button type="button" onClick={() => setShowModalUpdateProject(false)}>
        Close
      </button>
    </div>
  );
}
