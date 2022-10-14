import React from 'react';
import { Link } from 'react-router-dom';

import ITask from '../@types/task';

type PropType = {
  props: {
    task: ITask
    showProjectName?: boolean
  }
}

export default function CardTask({ props: { task, showProjectName } }: PropType): JSX.Element {
  const {
    id, name, description, project, collaborators,
  } = task;

  return (
    <div>
      <h2>
        📝
        {name}
      </h2>
      {showProjectName && (
      <h3>
        📋
        {project?.name}
      </h3>
      )}
      <p>
        {description.slice(0, 100)}
        {task.description.length > 100 && '...'}
      </p>
      <div>
        {collaborators && collaborators[0] ? <h3>🙎‍♀️💻🙎 Collaborators</h3>
          : <h3>💻No collaborators in this task</h3>}
        {collaborators?.map((collaborator) => (
          <h6 key={collaborator.id}>
            {collaborator.name}
          </h6>
        ))}
      </div>
      <Link to={`/tasks/${id}`}>
        Task Details
      </Link>
    </div>
  );
}
