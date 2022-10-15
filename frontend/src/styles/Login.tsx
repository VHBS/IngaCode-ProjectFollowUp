import styled from 'styled-components';

export const LoginPage = styled.div`
background: linear-gradient(rgba(134, 134, 134, 0.5), rgba(37, 37, 37, 0.596)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80');
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
`;

export const ContainerInput = styled.div`
  background: linear-gradient(to right, rgba(37, 36, 34, 0.5), rgba(0, 0, 0, 0.8));
  border-radius: 0.2rem;
  width: 50%;
  min-width: 22rem;

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  border-left: 1px solid rgb(235, 94, 40);

  label {
    margin-block: 1rem;
    width: 30%;
    min-width: 20rem;
  }

  button { 
    margin-top: 2rem
  }
`;
