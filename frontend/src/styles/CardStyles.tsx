import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardComponent = styled.div`
  background-color: rgb(64, 61, 57, 0.7);
  backdrop-filter: blur(16px);
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  padding: 1rem;
  border-radius: 0.2rem;
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

  .details-button {
    font-size: small;
    text-transform: none;
    margin: auto;
    margin-top: 1.5rem;
    padding: 0.2rem 0.5rem;

    :hover {
      color: rgb(255, 252, 242);
      background-color: rgb(235, 94, 40);
      box-shadow: 0 0 10px rgba(235, 94, 40);
      text-decoration: none;
      border-radius: 0.2rem;
    }
  }
`;

export const CardName = styled.h3`
  padding-bottom: 1rem;
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
  transition: transform 100ms ease-in-out;

  :hover, :focus{
    color: rgb(255, 252, 242);
    color: rgb(235, 94, 40);
    transform: scale(1.05);
  }
  :active {
    box-shadow: 0 0 0;
    transform: scale(0.95);
  }
`;

export const CardAssociations = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  min-height: 125px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid rgb(255, 252, 242,0.2);

  h5 {
    font-size: small;
  }

  .links {
    text-transform: none;
    margin-left: 4rem;
    margin-top: 0.5rem;
    font-size: small;
    padding: 0.2rem 0.5rem;
  }
`;

export const CardCollaborators = styled.div`
  height: 140px;
  padding-top: 1rem;
  border-bottom: 1px solid rgb(255, 252, 242,0.2);

  h5 {
    font-size: small;
  }

  p {
    font-size: small;
    margin-left: 4rem;
    margin-top: 0.5rem;
    padding: 0.2rem 0.5rem;
  }
`;
