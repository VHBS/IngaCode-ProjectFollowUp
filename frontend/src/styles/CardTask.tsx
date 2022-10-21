import styled from 'styled-components';

import { CardAssociations, CardComponent } from './CardStyles';

export const CardComponentTask = styled(CardComponent)`
  height: 27.5rem;
`;

export const CardAssociationsTask = styled(CardAssociations)`

  min-height: 3.7rem;
`;

export const CardDescriptionTask = styled.div`
  min-height: 6.2rem;
  padding-block: 1rem;

  h5 {
    font-size: small;
    font-weight: 800;
  }

  p {
    font-size: small;
    margin-left: 4rem;
    margin-top: 0.5rem;
    padding: 0.2rem 0.5rem;
  }
`;
