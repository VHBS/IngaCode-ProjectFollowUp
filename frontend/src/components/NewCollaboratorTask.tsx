import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import ICollaborator from '../@types/collaborator';
import useAuth from '../hooks/useAuth';
import { handleFetchCreateCollaboratorTask, handleFetchGetAllCollaborators } from '../utils/api';

type PropType = {
  props: {
    setShowModalNewCollaboratorTask: (showModal: boolean) => void
    handleLoadTask: () => Promise<void>
  }
}

export default function NewCollaboratorTask({
  props: {
    setShowModalNewCollaboratorTask, handleLoadTask,
  },
}: PropType): JSX.Element {
  const [collaborators, setCollaborators] = useState<ICollaborator[] | null>(null);
  const [newCollaboratorTaskId, setNewCollaboratorTaskId] = useState<string | null>(null);
  const { userData, setUserData } = useAuth() as AuthContextType;
  const { id } = useParams();

  const handleLoadCollaborators = async () => {
    const response = await handleFetchGetAllCollaborators(userData?.token as string);
    if ('message' in response) return setUserData(null);

    setCollaborators(response);
    setNewCollaboratorTaskId(response[0].id);
  };

  const handleCreateCollaboratorTask = async () => {
    const collaboratorTaskToCreate = {
      collaboratorId: newCollaboratorTaskId as string,
      taskId: id as string,
    };
    await handleFetchCreateCollaboratorTask(userData?.token as string, collaboratorTaskToCreate);
    await handleLoadTask();
    setShowModalNewCollaboratorTask(false);
  };

  useEffect(() => {
    handleLoadCollaborators();
  }, []);

  return (
    <div>
      <h1>Add collaborator to task</h1>

      <label htmlFor="select-project-name">
        <span>Collaborator Name:</span>
        <select
          id="select-project-name"
          onChange={({ target: { value } }) => setNewCollaboratorTaskId(value)}
        >
          { collaborators?.map((collaborator) => (
            <option
              key={collaborator.id}
              value={collaborator.id}
            >
              {collaborator.name}
            </option>
          ))}
        </select>
      </label>

      <button type="button" onClick={handleCreateCollaboratorTask}>
        Create Collaborator Task
      </button>

      <button type="button" onClick={() => setShowModalNewCollaboratorTask(false)}>
        Close
      </button>
    </div>
  );
}
