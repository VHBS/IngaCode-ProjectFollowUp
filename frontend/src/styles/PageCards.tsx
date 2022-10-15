import styled from 'styled-components';

export const ProjectsPage = styled.div`
  background: linear-gradient(rgba(134, 134, 134, 0.7), rgba(37, 37, 37, 0.596)), url('https://images.unsplash.com/photo-1526997440933-f7ec78a27601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80');
  background-position: top left;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  background-color: rgb(255, 252, 242);
  min-height: 100vh;
  padding-bottom: 10em;
  h1 {
    margin-block: 0.5em;
    color: rgb(37, 36, 34);
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 20em;
  background-color: rgb(64, 61, 57, 0.7);
  padding: 1em;
  margin-inline: auto;
  border-radius: 0.2em;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);

  input {
    margin-bottom: 1em;
  }
`;

export const TitlePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  max-width: 20em;
  margin-inline: auto;

  h1 {
    padding: 0.2em 0.5em;
    border-radius: 0.2em;
    color: rgb(204, 197, 185);
    background-color: rgb(235, 94, 40);
    background-color: rgb(64, 61, 57, 0.7);
  }

  .title-container-buttons {
    padding: 1em;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    background-color: rgb(64, 61, 57, 0.7);
    border-radius: 0.2em;
    margin-bottom: 0.5em;
    display: flex;
    height: 100%;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }
`;

export const CardsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1em;
  padding: 1em;
`;
