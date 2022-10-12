import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import IProject from '../@types/project';
import Navbar from '../components/Navbar';
import NewProject from '../components/NewProject';
import useAuth from '../hooks/useAuth';
import { handleGetAllProjects } from '../utils/api';

export default function Projects(): JSX.Element {
  const [showModalNewProject, setShowModalNewProject] = useState<boolean>(false);
  const [projects, setProjects] = useState<IProject[] | null>(null);
  const navigate = useNavigate();
  const { userData, setUserData } = useAuth() as AuthContextType;

  const handleLoadProjects = useCallback(async () => {
    if (!userData) {
      return navigate('/login');
    }
    const response = await handleGetAllProjects(userData.token);

    if ('message' in response) {
      return setUserData(null);
    }

    setProjects(response.sort((a, b) => new Date(a.createdAt).getTime()
    - new Date(b.createdAt).getTime()));
  }, [userData?.token, navigate, setUserData]);

  useEffect(() => {
    handleLoadProjects();
  }, [userData, handleLoadProjects]);

  return (
    <div>
      <Navbar />
      <h1>Projects</h1>
      <button type="button" onClick={() => setShowModalNewProject(!showModalNewProject)}>New Project</button>
      {showModalNewProject && <NewProject props={{ setShowModalNewProject, handleLoadProjects }} />}
      { projects?.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <Link to={`/projects/${project.id}`}>
            Project Details
          </Link>
        </div>
      ))}
    </div>
  );
}
