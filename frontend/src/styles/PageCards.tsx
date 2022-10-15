import styled from 'styled-components';

export const ProjectsPage = styled.div`
  background: linear-gradient(rgba(134, 134, 134, 0.7), rgba(37, 37, 37, 0.596)), url('https://images.unsplash.com/photo-1526997440933-f7ec78a27601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80');
  background-position: top left;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  background-color: rgb(255, 252, 242);
  min-height: 100vh;
  padding-bottom: 10rem;
  h1 {
    margin-block: 0.5rem;
    color: rgb(37, 36, 34);
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 20rem;
  background-color: rgb(64, 61, 57, 0.7);
  padding: 1rem;
  margin-inline: auto;
  border-radius: 0.2rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);

  input {
    margin-bottom: 1rem;
  }
`;

export const TitlePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  max-width: 20rem;
  margin-inline: auto;

  h1 {
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    color: rgb(204, 197, 185);
    background-color: rgb(235, 94, 40);
    background-color: rgb(64, 61, 57, 0.7);
  }

  .title-container-buttons {
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    background-color: rgb(64, 61, 57, 0.7);
    border-radius: 0.2rem;
    margin-bottom: 0.5rem;
    display: flex;
    height: 100%;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }
`;

export const CardsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;
