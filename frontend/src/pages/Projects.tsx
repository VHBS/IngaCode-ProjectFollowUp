import React, { useEffect, useState } from 'react';

import { AuthContextType } from '../@types/authContext';
import IProject from '../@types/project';
import CardProject from '../components/CardProject';
import Navbar from '../components/Navbar';
import NewProject from '../components/NewProject';
import useAuth from '../hooks/useAuth';
import { handleFetchGetAllProjects } from '../utils/api';

export default function Projects(): JSX.Element {
  const [showModalNewProject, setShowModalNewProject] = useState<boolean>(false);
  const [projects, setProjects] = useState<IProject[] | null>(null);
  const [filterProject, setFilterProject] = useState<string>('');
  const { userData, setUserData } = useAuth() as AuthContextType;

  const handleLoadProjects = async () => {
    const response = await handleFetchGetAllProjects(userData?.token as string);

    if ('message' in response) {
      return setUserData(null);
    }

    setProjects(response.sort((a, b) => new Date(a.createdAt).getTime()
    - new Date(b.createdAt).getTime()));
  };

  useEffect(() => {
    handleLoadProjects();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Projects</h1>

      <button
        type="button"
        onClick={() => setShowModalNewProject(!showModalNewProject)}
      >
        New Project
      </button>

      { showModalNewProject
      && (
        <NewProject
          props={{
            setShowModalNewProject,
            handleLoadProjects,
          }}
        />
      )}

      <label htmlFor="filter-project">
        Filter by project name:
        <input id="filter-project" type="text" onChange={({ target: { value } }) => setFilterProject(value.toLowerCase())} />
      </label>

      { projects?.filter((project) => project.name.toLowerCase()
        .includes(filterProject)).map((project) => (
          <CardProject key={project.id} props={{ project }} />
      ))}
    </div>
  );
}
