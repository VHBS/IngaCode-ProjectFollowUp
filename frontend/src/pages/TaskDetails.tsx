import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import ITask from '../@types/task';
import CopyrightImage from '../components/CopyrightImage';
import Navbar from '../components/Navbar';
import NewCollaboratorTask from '../components/NewCollaboratorTask';
import UpdateTask from '../components/UpdateTask';
import useAuth from '../hooks/useAuth';
import { StyledLink } from '../styles/CardStyles';
import { Button } from '../styles/default';
import { DetailTitlePage } from '../styles/ProjectDetails';
import { DetailPage, DetailPageTaskDescription } from '../styles/TaskDetails';
import { handleFetchDeleteTask, handleFetchGetOneTask } from '../utils/api';

export default function TaskDetails(): JSX.Element {
  const [task, setTask] = useState<ITask | null>(null);
  const [showModalUpdateTask, setShowModalUpdateTask] = useState<boolean>(false);
  const [showModalNewCollaboratorTask, setShowModalNewCollaboratorTask] = useState<boolean>(false);
  const { userData, setUserData } = useAuth() as AuthContextType;
  const { id } = useParams();
  const navigate = useNavigate();

  const handleLoadTask = async () => {
    const response = await handleFetchGetOneTask(userData?.token as string, id as string);

    if ('message' in response) {
      return setUserData(null);
    }

    setTask(response);
  };

  const handleDeleteTask = async () => {
    await handleFetchDeleteTask(userData?.token as string, id as string);
    navigate('/tasks');
  };

  useEffect(() => {
    handleLoadTask();
  }, []);

  return (
    <DetailPage>
      <Navbar />

      <DetailTitlePage>
        <h1>
          📝
          {task?.name}
        </h1>
        <h3>
          <StyledLink to={`/projects/${task?.project?.id}`} className="links">
            📋
            {task?.project?.name}
          </StyledLink>
        </h3>

        <div className="collaborators-project-container">
          {task?.collaborators?.some(
            (collaborator) => collaborator.name,
          ) ? <h3>🙎‍♀️💻🙎 Collaborators</h3> : <h3>💻No collaborators in this task</h3>}

          <div className="collaborators-project">
            {task?.collaborators?.map((collaborator) => (
              <h5 key={collaborator.id}>
                {collaborator.name}
              </h5>
            ))}
          </div>

        </div>

        <div className="title-container-buttons">
          <Button
            type="button"
            onClick={() => setShowModalNewCollaboratorTask(!showModalNewCollaboratorTask)}
          >
            Add collaborator
          </Button>

          <Button
            type="button"
            onClick={() => setShowModalUpdateTask(!showModalUpdateTask)}
          >
            Edit Task
          </Button>

          <Button
            className="delete-button"
            type="button"
            onClick={() => handleDeleteTask()}
          >
            Delete Task
          </Button>
        </div>
      </DetailTitlePage>

      <NewCollaboratorTask
        props={{
          setShowModalNewCollaboratorTask,
          handleLoadTask,
          showModal: showModalNewCollaboratorTask,
        }}
      />

      <UpdateTask
        props={{
          handleLoadTask,
          setShowModalUpdateTask,
          showModal: showModalUpdateTask,
        }}
      />

      <DetailPageTaskDescription>
        <div className="description-content">
          <h3>✏️ Description</h3>
          <p>{task?.description}</p>
        </div>
      </DetailPageTaskDescription>

      <CopyrightImage author="@pierrejeanneret" />

    </DetailPage>
  );
}
