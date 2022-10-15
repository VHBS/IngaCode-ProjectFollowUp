import React, { useEffect, useState } from 'react';

import { AuthContextType } from '../@types/authContext';
import IProject from '../@types/project';
import CardProject from '../components/CardProject';
import Navbar from '../components/Navbar';
import NewProject from '../components/NewProject';
import useAuth from '../hooks/useAuth';
import { Button, Input, Label } from '../styles/default';
import {
  FilterContainer, ProjectsPage, TitlePage, CardsContainer,
} from '../styles/PageCards';
import { handleFetchGetAllProjects } from '../utils/api';

export default function Projects(): JSX.Element {
  const [showModalNewProject, setShowModalNewProject] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [projects, setProjects] = useState<IProject[] | null>(null);
  const [filterProject, setFilterProject] = useState<string>('');
  const [filterTaskByName, setFilterTaskByName] = useState<string>('');
  // const [filterTaskByCollaboratorName, setFilterTaskByCollaboratorName] = useState<string>('');
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
    <ProjectsPage>
      <Navbar />
      <TitlePage>
        <h1>Projects</h1>
        <div className="title-container-buttons">
          <Button
            type="button"
            onClick={() => setShowModalNewProject(!showModalNewProject)}
          >
            New Project
          </Button>

          <Button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
          </Button>
        </div>
      </TitlePage>

      { showModalNewProject
      && (
        <NewProject
          props={{
            setShowModalNewProject,
            handleLoadProjects,
          }}
        />
      )}
      { showFilters && (
      <FilterContainer>
        <Label htmlFor="filter-project">
          <span>
            📋 Filter by project name:
          </span>
          <Input
            id="filter-project"
            autoComplete="off"
            type="text"
            onChange={({ target: { value } }) => setFilterProject(value.toLowerCase())}
          />
        </Label>
        <Label htmlFor="filter-task-by-name">
          <span>
            📝 Filter by project name:
          </span>
          <Input
            id="filter-task-by-name"
            autoComplete="off"
            type="text"
            onChange={({ target: { value } }) => setFilterTaskByName(value.toLowerCase())}
          />
        </Label>
      </FilterContainer>
      )}

      {/* <br />
      <label htmlFor="filter-task-by-collaborator-name">
        Filter by collaborator name:
        <input
          id="filter-task-by-collaborator-name"
          type="text"
          onChange={({ target: { value } }) => setFilterTaskByCollaboratorName(value.toLowerCase())}
        />
      </label> */}

      <CardsContainer>
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
      </CardsContainer>

    </ProjectsPage>
  );
}
