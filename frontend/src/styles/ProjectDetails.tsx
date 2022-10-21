import styled from 'styled-components';

import { NewItemComponent, NewItemContainer, NewProjectTitle } from './NewRegistry';
import { PageComponent, TitlePage } from './PageCards';

export const DetailPage = styled(PageComponent)`
  background: linear-gradient(rgba(134, 134, 134, 0.7), rgba(37, 37, 37, 0.596)), url('https://images.unsplash.com/photo-1665501339562-6a58862fac92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80');
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: cover;

  .card-component {
    height: auto;
  }
`;

export const DetailTitlePage = styled(TitlePage)`
  .collaborators-project-container {
    display: flex;
    background-color: rgb(64, 61, 57, 0.7);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 20rem;
    border-radius: 0.2rem;
    backdrop-filter: blur(16px);
    margin-bottom: 0.5rem;
    padding: 0 1rem;
    text-align: center;
    color: rgb(204, 197, 185);

    .collaborators-project {
      margin: 1rem 0  0.5rem 0;
    }

    h5 {
      margin-block: 0.5rem;
    }

    h3 {
      background-color: transparent;
      backdrop-filter: none;
    }
  }

  .title-container-buttons {
    .delete-button{
      border: 1px solid rgb(235, 40, 40);
      :hover {
        background-color: rgb(235, 40, 40);
        box-shadow: 0 0 10px rgb(235, 40, 40);
      }
    }
  }
`;

export const EditItemComponent = styled(NewItemComponent)<{ showModal: boolean }>`
`;

export const EditItemContainer = styled(NewItemContainer)`
`;

export const EditItemTitle = styled(NewProjectTitle)`
`;
