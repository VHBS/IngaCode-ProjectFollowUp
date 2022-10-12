import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../components/Navbar';
import UpdateProject from '../components/UpdateProject';

export default function ProjectDetails(): JSX.Element {
  const [showModalUpdateProject, setShowModalUpdateProject] = useState<boolean>(false);

  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <button type="button" onClick={() => setShowModalUpdateProject(!showModalUpdateProject)}>
        Edit Project
      </button>
      {showModalUpdateProject && <UpdateProject props={{ setShowModalUpdateProject }} />}
    </div>
  );
}
