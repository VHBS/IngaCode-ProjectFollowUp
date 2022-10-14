import React from 'react';
import { Link } from 'react-router-dom';

import IProject from '../@types/project';

type PropType = {
  props: { project: IProject }
}

export default function CardProject({
  props:
  { project: { name, id, tasks } },
}: PropType): JSX.Element {
  return (
    <div>
      <h2>
        📋
        {' '}
        {name}
      </h2>

      {tasks && tasks.length > 0 ? <h3>📝 Last tasks</h3> : <h3>No tasks in this project</h3>}
      {tasks?.sort((a, b) => new Date(b.createdAt).getTime()
        - new Date(a.createdAt).getTime()).slice(0, 4).map((task) => (
          <h5 key={task.id}>
            {task.name}
          </h5>
      ))}

      <div>
        {tasks?.map((task) => task.collaborators?.some(
          (collaborator) => collaborator.name,
        )).some((result) => result) ? (
          <h3>🙎‍♀️💻🙎 Collaborators</h3>) : (
            <h3>No collaborators on this project</h3>
          )}
        {tasks?.map((task) => task.collaborators?.map((collaborator) => (
          <h5 key={collaborator.id}>
            {collaborator.name}
          </h5>
        )))}
      </div>

      <Link to={`/projects/${id}`}>
        Project Details
      </Link>
    </div>
  );
}
