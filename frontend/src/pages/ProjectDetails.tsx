import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import IProject from '../@types/project';
import CardTask from '../components/CardTask';
import CopyrightImage from '../components/CopyrightImage';
import Navbar from '../components/Navbar';
import NewTask from '../components/NewTask';
import UpdateProject from '../components/UpdateProject';
import useAuth from '../hooks/useAuth';
import { Button } from '../styles/default';
import { CardsContainer } from '../styles/PageCards';
import { DetailPage, DetailTitlePage } from '../styles/ProjectDetails';
import { handleFetchDeleteProject, handleFetchGetOneProject } from '../utils/api';

export default function ProjectDetails(): JSX.Element {
  const [project, setProject] = useState<IProject>();
  const [showModalUpdateProject, setShowModalUpdateProject] = useState<boolean>(false);
  const [showModalNewItem, setShowModalNewItem] = useState<boolean>(false);
  const { userData, setUserData } = useAuth() as AuthContextType;
  const { id } = useParams();
  const navigate = useNavigate();

  const handleLoadProject = async () => {
    const response = await handleFetchGetOneProject(userData?.token as string, id as string);

    if ('message' in response) {
      return setUserData(null);
    }

    setProject(response);
  };

  const handleDeleteProject = async () => {
    await handleFetchDeleteProject(userData?.token as string, id as string);
    navigate('/projects');
  };

  useEffect(() => {
    handleLoadProject();
  }, []);

  return (
    <DetailPage>
      <Navbar />

      <DetailTitlePage>
        <h1>
          📋
          {project?.name}
        </h1>
        <div className="collaborators-project-container">

          {project?.tasks?.map((task) => task.collaborators?.some(
            (collaborator) => collaborator.name,
          )).some((result) => result) ? (
            <h3>🙎‍♀️💻🙎 Project collaborators</h3>
            ) : (
              <h3>💻 No collaborators on this project</h3>
            )}

          {project?.tasks && !project?.tasks[0] && (
            <h3>📝 No tasks in this project</h3>
          )}
          <div className="collaborators-project">

            {project?.tasks?.map((task) => task.collaborators?.map((collaborator) => (
              <h5 key={collaborator.id}>
                {collaborator.name}
              </h5>
            )))}
          </div>
        </div>
        <div className="title-container-buttons">
          <Button type="button" onClick={() => setShowModalUpdateProject(!showModalUpdateProject)}>
            Edit Project
          </Button>
          <Button type="button" onClick={() => setShowModalNewItem(!showModalNewItem)}>
            Create Task
          </Button>
          <Button className="delete-button" type="button" onClick={() => handleDeleteProject()}>
            Delete Project
          </Button>
        </div>
      </DetailTitlePage>
      <UpdateProject props={{
        setShowModalUpdateProject,
        handleLoadProject,
        showModal: showModalUpdateProject,
      }}
      />
      <NewTask props={{
        showModalNewItem,
        setShowModalNewItem,
        handleReload: handleLoadProject,
      }}
      />

      <CardsContainer>
        {project?.tasks?.map((task) => (
          <CardTask key={task.id} props={{ task, showProjectName: false }} />
        ))}
      </CardsContainer>
      <CopyrightImage author="@nineteen" />
    </DetailPage>
  );
}
