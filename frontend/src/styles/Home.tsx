import styled from 'styled-components';

import { PageComponent } from './PageCards';

export const HomePage = styled(PageComponent)`
  background: linear-gradient(rgba(134, 134, 134, 0.7), rgba(37, 37, 37, 0.596)), url('https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledCopyrightImage = styled.div`
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    
  a {
    width: 100%;
    margin: 1rem;
    font-size: small;
    font-weight: 500;
    text-decoration: none;
    color: rgb(235, 94, 40);

    span {
      color: rgb(37, 36, 34);
      color: rgb(255, 252, 242);
      color: rgb(204, 197, 185);

    }
  }
`;
