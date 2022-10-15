import styled from 'styled-components';

export const NavBarComponent = styled.header`
  background-color: rgba(37, 36, 34, 0.74);
  top: 0;
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(255, 252, 242);
  backdrop-filter: blur(0.3em);
  z-index: 10;
  h5{
    margin-left: 1em;
  }
  `;

export const ButtonsContainer = styled.div`
  display: flex;
  button {
    margin: 0.5em;
  }
  
`;
