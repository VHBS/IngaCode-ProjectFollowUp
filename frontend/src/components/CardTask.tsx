import React from 'react';

import ITask from '../@types/task';
import {
  CardName, CardCollaborators, StyledLink,
} from '../styles/CardStyles';
import { CardAssociationsTask, CardComponentTask, CardDescriptionTask } from '../styles/CardTask';

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
    <CardComponentTask>
      <StyledLink to={`/tasks/${id}`}>
        <CardName>
          📝
          {name}
        </CardName>
      </StyledLink>
      {showProjectName && (
        <CardAssociationsTask>
          <h5>📋 Project</h5>
          <StyledLink to={`/projects/${id}`} className="links">
            {project?.name}
          </StyledLink>
        </CardAssociationsTask>
      )}
      <CardDescriptionTask>
        <h5>
          ✏️ Description
        </h5>
        <p>
          {description.slice(0, 100)}
          {task.description.length > 99 && '...'}
        </p>
      </CardDescriptionTask>
      <CardCollaborators>
        {collaborators && collaborators[0] ? <h5>🙎‍♀️💻🙎 Collaborators</h5>
          : <h5>💻No collaborators in this task</h5>}
        {collaborators?.slice(0, 5).map((collaborator) => (
          <p key={collaborator.id}>
            {collaborator.name}
          </p>
        ))}
      </CardCollaborators>
      <StyledLink className="details-button" to={`/tasks/${id}`}>
        Details
      </StyledLink>
    </CardComponentTask>
  );
}
