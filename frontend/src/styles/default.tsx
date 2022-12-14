import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 0.2rem;
  padding: 0.5rem 0.5rem;
  color: rgb(37, 36, 34);
  border: 1px solid rgb(235, 94, 40, 0);
  background-color: rgba(255, 255, 255, 0.2);
  color: rgb(255, 252, 242);
  :focus {
    border: 1px solid rgb(235, 94, 40);
    outline: none;
  }
`;

export const Select = styled.select`
  border-radius: 0.2rem;
  padding: 0.5rem;
  color: rgb(37, 36, 34);
  background-color: rgb(204, 197, 185);
  border: 1px solid rgb(235, 94, 40, 0);
  background-color: rgba(255, 255, 255, 0.2);
  color: rgb(255, 252, 242);
  
  :focus {
    border: 1px solid rgb(235, 94, 40);
    outline: none;
  }

  option {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: rgb(204, 197, 185);

  span {
    padding-block: 0.5rem;
  }
`;

export const Button = styled.button`
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  background-color: rgba(255, 255, 255, 0);
  color: rgb(204, 197, 185);
  transition: transform 100ms ease-in-out;

  :hover {
    color: rgb(255, 252, 242);
    background-color: rgb(235, 94, 40);
    box-shadow: 0 0 10px rgba(235, 94, 40);
    transform: scale(1.05);
  }

  :active {
    box-shadow: 0 0 0;
    transform: scale(0.95);
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  height: 10rem;
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  border: 1px solid rgb(235, 94, 40, 0);
  background-color: rgba(255, 255, 255, 0.2);
  color: rgb(255, 252, 242);
  
  :focus {
    border: 1px solid rgb(235, 94, 40);
    outline: none;
  }
`;
