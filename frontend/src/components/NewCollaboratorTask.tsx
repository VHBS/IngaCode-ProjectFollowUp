import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import ICollaborator from '../@types/collaborator';
import useAuth from '../hooks/useAuth';
import { Button, Label, Select } from '../styles/default';
import { NewItemComponent, NewItemContainer, NewProjectTitle } from '../styles/NewRegistry';
import { handleFetchCreateCollaboratorTask, handleFetchGetAllCollaborators } from '../utils/api';

type PropType = {
  props: {
    setShowModalNewCollaboratorTask: (showModal: boolean) => void
    handleLoadTask: () => Promise<void>
    showModal: boolean

  }
}

export default function NewCollaboratorTask({
  props: {
    setShowModalNewCollaboratorTask,
    handleLoadTask,
    showModal,
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
    <NewItemComponent showModal={showModal}>
      <NewItemContainer>
        <NewProjectTitle>
          Add collaborator to task
        </NewProjectTitle>

        <Label htmlFor="select-project-name">
          <span>Collaborator Name:</span>
          <Select
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
          </Select>
        </Label>

        <div className="title-container-buttons">
          <Button type="button" onClick={handleCreateCollaboratorTask}>
            Button Collaborator Task
          </Button>

          <Button type="button" onClick={() => setShowModalNewCollaboratorTask(false)}>
            Close
          </Button>
        </div>
      </NewItemContainer>
    </NewItemComponent>
  );
}
