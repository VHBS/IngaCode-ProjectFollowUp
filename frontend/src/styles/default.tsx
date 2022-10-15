import styled from 'styled-components';

export const Input = styled.input`
  height: 2em;
  border-radius: 0.2em;
  padding: 0.2em 0.5em;
  color: rgb(37, 36, 34);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: rgb(204, 197, 185);

  span {
    padding-block: 0.5em;
  }
`;

export const Button = styled.button`
  padding: 0.2em 0.5em;
  border-radius: 0.2em;
  background-color: rgba(255, 255, 255, 0);
  color: rgb(204, 197, 185);

  :hover {
    color: rgb(255, 252, 242);
    background-color: rgb(235, 94, 40);
    box-shadow: 0 0 10px rgba(235, 94, 40);
  }

  :active {
    box-shadow: 0 0 0;
  }
`;
