import React from 'react';

import IProject from '../@types/project';
import {
  CardComponent, CardName, CardCollaborators, CardAssociations, StyledLink,
} from '../styles/CardStyles';

type PropType = {
  props: { project: IProject }
}

export default function CardProject({
  props:
  { project: { name, id, tasks } },
}: PropType): JSX.Element {
  return (
    <CardComponent>
      <StyledLink to={`/projects/${id}`}>
        <CardName>
          📋
          {' '}
          {name}
        </CardName>
      </StyledLink>

      <CardAssociations>
        {tasks && tasks.length > 0 ? <h5>📝 Last tasks</h5> : <h5>📄 No tasks in this project</h5>}
        {tasks?.sort((a, b) => new Date(b.createdAt).getTime()
        - new Date(a.createdAt).getTime()).slice(0, 4).map((task) => (
          <StyledLink to={`/tasks/${task.id}`} className="links" key={task.id}>
            {task.name}
          </StyledLink>
        ))}
      </CardAssociations>

      <CardCollaborators>
        {tasks?.map((task) => task.collaborators?.some(
          (collaborator) => collaborator.name,
        )).some((result) => result) ? (
          <h5>🙎‍♀️💻🙎 Collaborators</h5>) : (
            <h5>💻 No collaborators on this project</h5>
          )}
        {tasks?.map((task) => task.collaborators?.map((collaborator) => (
          <p key={collaborator.id}>
            {collaborator.name}
          </p>
        )))}
      </CardCollaborators>

      <StyledLink className="details-button" to={`/projects/${id}`}>
        Details
      </StyledLink>
    </CardComponent>
  );
}
