import styled from 'styled-components';

export const NewItemComponent = styled.div`
  display: flex;
  margin-bottom: 0.5em;
`;

export const NewProjectTitle = styled.h2`
  font-size: xx-large;
  text-align: center;
  padding: 1em;
  color: rgb(204, 197, 185);
`;

export const NewItemContainer = styled.div`
  border-radius: 0.2em;
  padding: 1em;
  width: 70%;
  max-width: 20em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  background-color: rgb(64, 61, 57, 0.7);

  .title-container-buttons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  button { 
    margin-top: 2em
  }
`;
