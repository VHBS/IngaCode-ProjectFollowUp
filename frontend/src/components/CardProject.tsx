import React from 'react';

import IProject from '../@types/project';
import {
  CardProjectComponent, CardProjectName, ProjectCardCollaborators, ProjectCardTasks, StyledLink,
} from '../styles/CardProject';

type PropType = {
  props: { project: IProject }
}

export default function CardProject({
  props:
  { project: { name, id, tasks } },
}: PropType): JSX.Element {
  return (
    <CardProjectComponent>
      <StyledLink to={`/projects/${id}`}>
        <CardProjectName>
          📋
          {' '}
          {name}
        </CardProjectName>
      </StyledLink>

      <ProjectCardTasks>
        {tasks && tasks.length > 0 ? <h5>📝 Last tasks</h5> : <h6>📄 No tasks in this project</h6>}
        {tasks?.sort((a, b) => new Date(b.createdAt).getTime()
        - new Date(a.createdAt).getTime()).slice(0, 4).map((task) => (
          <StyledLink to={`/tasks/${task.id}`} className="task-name" key={task.id}>
            {task.name}
          </StyledLink>
        ))}
      </ProjectCardTasks>

      <ProjectCardCollaborators>
        {tasks?.map((task) => task.collaborators?.some(
          (collaborator) => collaborator.name,
        )).some((result) => result) ? (
          <h5>🙎‍♀️💻🙎 Collaborators</h5>) : (
            <h6>💻 No collaborators on this project</h6>
          )}
        {tasks?.map((task) => task.collaborators?.map((collaborator) => (
          <p key={collaborator.id}>
            {collaborator.name}
          </p>
        )))}
      </ProjectCardCollaborators>

      <StyledLink className="project-details" to={`/projects/${id}`}>
        Details
      </StyledLink>
    </CardProjectComponent>
  );
}
