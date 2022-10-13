import React from 'react';
import { Link } from 'react-router-dom';

import ITask from '../@types/task';

type PropType = {
  props: { task: ITask}
}

export default function CardTask({ props: { task } }: PropType): JSX.Element {
  const {
    id, name, description, project,
  } = task;
  return (
    <div>
      <h2>
        📝
        {name}
      </h2>
      <h3>
        📋
        {project?.name}
      </h3>
      <p>
        {description.slice(0, 100)}
        {task.description.length > 100 && '...'}
      </p>
      <Link to={`/tasks/${id}`}>
        Project Details
      </Link>
    </div>
  );
}
