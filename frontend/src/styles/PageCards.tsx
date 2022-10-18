import styled from 'styled-components';

export const PageComponent = styled.div`
  background: linear-gradient(rgba(134, 134, 134, 0.7), rgba(37, 37, 37, 0.596)), url('https://images.unsplash.com/photo-1476977251893-330046eb5ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
  background-position: center left;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

export const FilterComponent = styled.div<{showFilters: boolean}>`
  overflow:hidden;

  ${({ showFilters }) => {
    if (!showFilters) {
      return `
      max-height: 0;
      transition: max-height 0.2s ease-in-out;
      pointer-events: none;
      animation: fadeOut 0.7s;
      @keyframes fadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
      };
    `;
    }
    return `
      max-height: 900px;
      transition: max-height 0.2s ease-in-out;
      animation: fadein 0.3s;
      @keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
      };
    `;
  }}
  
`;

export const FilterContainer = styled.div`
  backdrop-filter: blur(16px);

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

  label {
    border-bottom: 1px solid rgb(255, 252, 242,0.05);
    padding-block: 1rem;
  };

  label:last-child {
    border-bottom: 1px solid rgb(255, 252, 242,0);
  };
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
    background-color: rgb(64, 61, 57, 0.7);
    margin-block: 0.5rem;
    backdrop-filter: blur(16px);

  }

  .title-container-buttons {
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    background-color: rgb(64, 61, 57, 0.7);
  backdrop-filter: blur(16px);

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
