import styled from 'styled-components';

import { PageComponent } from './PageCards';

export const DetailPage = styled(PageComponent)`
  background: linear-gradient(rgba(134, 134, 134, 0.7), rgba(37, 37, 37, 0.596)), 
  url('https://images.unsplash.com/photo-1496249872230-8bd9cc160389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;

  .card-component {
    height: auto;
  }
`;

export const DetailPageTaskDescription = styled.div`
    padding: 0 1rem 3rem;
    display: flex;
    justify-content: center;
    
    .description-content{
    max-width: 1200px;
    z-index: 1;
    color: rgb(204, 197, 185);
    background-color: rgb(64, 61, 57, 0.7);
    backdrop-filter: blur(16px);
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    padding: 1.5rem;
    margin: 0 1rem;
    text-align: justify;
  }

  h3 {
    padding: 1rem;
    text-align: center;
  }
`;
