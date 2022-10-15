import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardProjectComponent = styled.div`
  background-color: rgb(64, 61, 57, 0.7);
  backdrop-filter: blur(16px);
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  padding: 1em;
  border-radius: 0.2em;
  transition: transform 100ms ease-in-out;
  height: 400px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  border: 1px solid rgb(235, 94, 40, 0);
  color: rgb(204, 197, 185);

  :hover {
    z-index: 2;
    position: relative;
    border: 1px solid rgb(235, 94, 40);
  }

  .project-details {
    font-size: small;
    text-transform: none;
    margin: auto;
    margin-top: 1.5em;
    padding: 0.2em 0.5em;

    :hover {
      color: rgb(255, 252, 242);
      background-color: rgb(235, 94, 40);
      box-shadow: 0 0 10px rgba(235, 94, 40);
      text-decoration: none;
      border-radius: 0.2em;
    }
  }
`;

export const CardProjectName = styled.h3`
  padding-bottom: 1em;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  border-bottom: 1px solid rgb(255, 252, 242,0.2);
`;

export const StyledLink = styled(Link)`
  color: rgb(204, 197, 185);
  text-decoration: none;
  text-transform: uppercase;
  font-size: medium;

  &:hover, &:focus, &:active{
    color: rgb(255, 252, 242);
    color: rgb(235, 94, 40);
    text-decoration: underline;
  }
`;

export const ProjectCardTasks = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  min-height: 125px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid rgb(255, 252, 242,0.2);

  h5 {
    font-size: small;
  }

  .task-name {
    text-transform: none;
    margin-left: 4em;
    margin-top: 0.5em;
    font-size: small;
    padding: 0.2em 0.5em;
  }
`;

export const ProjectCardCollaborators = styled.div`
  height: 140px;
  padding-top: 1em;
  border-bottom: 1px solid rgb(255, 252, 242,0.2);

  h5 {
    font-size: small;
  }

  p {
    font-size: small;
    margin-left: 4em;
    margin-top: 0.5em;
    padding: 0.2em 0.5em;

  }
`;
