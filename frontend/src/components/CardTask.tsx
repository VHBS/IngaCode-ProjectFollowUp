import React from 'react';

import ITask from '../@types/task';

type PropType = {
  props: { task: ITask}
}

export default function CardTask({ props: { task } }: PropType): JSX.Element {
  const { name, description, project } = task;
  return (
    <div>
      <h2>{name}</h2>
      <h3>{project?.name}</h3>
      <p>{description}</p>
    </div>
  );
}
