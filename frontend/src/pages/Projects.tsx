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
  const [filterTaskByName, setFilterTaskByName] = useState<string>('');
  const [filterTaskByCollaboratorName, setFilterTaskByCollaboratorName] = useState<string>('');
  const { userData, setUserData } = useAuth() as AuthContextType;

  const handleLoadProjects = async () => {
    const response = await handleFetchGetAllProjects(userData?.token as string);

    if ('message' in response) {
      return setUserData(null);
    }

    setProjects(response.sort((a, b) => new Date(b.createdAt).getTime()
    - new Date(a.createdAt).getTime()));
    setProjects(response);
  };

  useEffect(() => {
    handleLoadProjects();
  }, []);

  return (
    <div>
      <Navbar />
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

      <h1>Projects</h1>

      <label htmlFor="filter-project">
        Filter by project name:
        <input
          id="filter-project"
          type="text"
          onChange={({ target: { value } }) => setFilterProject(value.toLowerCase())}
        />
      </label>

      <br />
      <label htmlFor="filter-task-by-name">
        Filter by task name:
        <input
          id="filter-task-by-name"
          type="text"
          onChange={({ target: { value } }) => setFilterTaskByName(value.toLowerCase())}
        />
      </label>

      {/* <br />
      <label htmlFor="filter-task-by-collaborator-name">
        Filter by collaborator name:
        <input
          id="filter-task-by-collaborator-name"
          type="text"
          onChange={({ target: { value } }) => setFilterTaskByCollaboratorName(value.toLowerCase())}
        />
      </label> */}

      { projects?.filter((project) => project.name
        .toLowerCase().includes(filterProject))
        .filter((project) => {
          if (filterTaskByName === ''
          && project.tasks?.length === 0) return true;
          return project.tasks?.some((task) => task.name.toLowerCase()
            .includes(filterTaskByName));
        })
        // .filter(({ tasks }) => tasks?.some((task) => {
        //   // console.log(task);
        //   // return true;
        //   if (filterTaskByCollaboratorName === ''
        //   || task.collaborators?.length === 0) return true;
        //   return task.collaborators?.some((collaborator) => collaborator.name.toLowerCase()
        //     .includes(filterTaskByCollaboratorName));
        // }))
        .map((project) => (
          <CardProject key={project.id} props={{ project }} />
        ))}
    </div>
  );
}
