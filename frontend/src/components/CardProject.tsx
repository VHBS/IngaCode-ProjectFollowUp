import React from 'react';
import { Link } from 'react-router-dom';

import IProject from '../@types/project';

type PropType = {
  props: {project: IProject}
}

export default function CardProject({ props: { project } }: PropType): JSX.Element {
  const { name, id, tasks } = project;
  return (
    <div>
      <h2>
        📋
        {name}
      </h2>

      {tasks && tasks.length > 0 ? <h3>📝Last tasks</h3> : <h3>No have tasks</h3>}
      {tasks?.sort((a, b) => new Date(b.createdAt).getTime()
        - new Date(a.createdAt).getTime()).slice(0, 4).map((task) => (
          <li key={task.id}>
            {task.name}
          </li>
      ))}

      <Link to={`/projects/${id}`}>
        Project Details
      </Link>
    </div>
  );
}
