import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AuthContextType } from '../@types/authContext';
import Navbar from '../components/Navbar';
import UpdateProject from '../components/UpdateProject';
import useAuth from '../hooks/useAuth';
import { handleFetchDeleteProject } from '../utils/api';

export default function ProjectDetails(): JSX.Element {
  const [showModalUpdateProject, setShowModalUpdateProject] = useState<boolean>(false);
  const { userData } = useAuth() as AuthContextType;
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteProject = async () => {
    if (userData) {
      await handleFetchDeleteProject(userData.token, id as string);
      navigate('/projects');
    }
  };
  return (
    <div>
      <Navbar />
      <button type="button" onClick={() => setShowModalUpdateProject(!showModalUpdateProject)}>
        Edit Project
      </button>
      <button type="button" onClick={() => handleDeleteProject()}>
        Delete Project
      </button>
      {showModalUpdateProject && <UpdateProject props={{ setShowModalUpdateProject }} />}
    </div>
  );
}
