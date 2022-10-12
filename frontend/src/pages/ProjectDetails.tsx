import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import IProject from '../@types/project';
import Navbar from '../components/Navbar';
import UpdateProject from '../components/UpdateProject';
import useAuth from '../hooks/useAuth';
import { handleFetchDeleteProject, handleFetchGetOneProject } from '../utils/api';

export default function ProjectDetails(): JSX.Element {
  const [project, setProject] = useState<IProject | null>(null);

  const [showModalUpdateProject, setShowModalUpdateProject] = useState<boolean>(false);
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
    if (userData) {
      await handleFetchDeleteProject(userData.token, id as string);
      navigate('/projects');
    }
  };

  useEffect(() => {
    handleLoadProject();
  }, []);
  return (
    <div>
      <Navbar />
      {showModalUpdateProject && <UpdateProject props={{ setShowModalUpdateProject }} />}
      <div>
        <h1>{project?.name}</h1>
        <button type="button" onClick={() => setShowModalUpdateProject(!showModalUpdateProject)}>
          Edit Project
        </button>
        <button type="button" onClick={() => handleDeleteProject()}>
          Delete Project
        </button>
      </div>
      {project?.tasks?.map((task) => (
        <div key={task.id}>
          <h4>{task.name}</h4>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}
