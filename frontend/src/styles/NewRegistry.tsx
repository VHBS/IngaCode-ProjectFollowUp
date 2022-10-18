import styled from 'styled-components';

export const NewItemComponent = styled.div<{ showModalNewItem: boolean}>`
  margin-bottom: 0.5rem;
  overflow:hidden;
  color: rgb(204, 197, 185);
  
  
  ${({ showModalNewItem }) => {
    if (!showModalNewItem) {
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

export const NewProjectTitle = styled.h2`
  font-size: xx-large;
  text-align: center;
  padding: 1rem;
`;

export const NewItemContainer = styled.div`
  backdrop-filter: blur(16px);

  border-radius: 0.2rem;
  padding: 1rem;
  width: 70%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  background-color: rgb(64, 61, 57, 0.7);

  .title-container-buttons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  button { 
    margin-top: 2rem
  }

  .error-message {
    span{
      color: rgb(235, 94, 40);
      font-weight: 800;
    }
  }

  label {
    border-bottom: 1px solid rgb(255, 252, 242,0.05);
    padding-block: 1rem;
  };

  label:nth-last-child(-n+2) {
    border-bottom: 1px solid rgb(255, 252, 242,0);
  };
`;
