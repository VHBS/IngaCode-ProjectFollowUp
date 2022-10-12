import React, { useState } from 'react';

import { AuthContextType } from '../@types/authContext';
import useAuth from '../hooks/useAuth';
import { handleCreateProject } from '../utils/api';

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
      await handleCreateProject(userData.token, { name: projectName });
      await handleLoadProjects();
      setProjectName('');
      return setShowMessageError(false);
    }
    return setShowMessageError(true);
  };

  return (
    <div>
      <h1>
        NewProject
      </h1>
      { showMessageError && <p>Insert a project name! </p>}
      <label htmlFor="name">
        Project Name:
        <input
          id="name"
          type="text"
          onChange={({ target: { value } }) => setProjectName(value)}
          value={projectName}
        />
      </label>
      <button type="button" onClick={() => handleCreateNewProject()}>
        Create Project
      </button>
      <button type="button" onClick={() => setShowModalNewProject(false)}>
        Close
      </button>
    </div>
  );
}
