import styled from 'styled-components';

import { CardAssociations, CardComponent } from './CardStyles';

export const CardComponentTask = styled(CardComponent)`
  height: 27.5rem;
`;

export const CardAssociationsTask = styled(CardAssociations)`
  border-block: 1px solid rgb(255, 252, 242,0.05);

  min-height: 3.7rem;
`;

export const CardDescriptionTask = styled.div`
  min-height: 6.2rem;
  padding-block: 1rem;
  border-bottom: 1px solid rgb(255, 252, 242,0.05);

  p {
    padding-top: 0.5rem;
  }
`;
