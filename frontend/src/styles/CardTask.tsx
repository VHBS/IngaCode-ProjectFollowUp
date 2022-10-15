import styled from 'styled-components';

import { CardAssociations, CardComponent } from './CardStyles';

export const CardComponentTask = styled(CardComponent)`
  height: 440px;

`;

export const CardAssociationsTask = styled(CardAssociations)`
  min-height: 60px;
`;

export const CardDescriptionTask = styled.div`
  min-height: 100px;
  padding-block: 1em;
  border-bottom: 1px solid rgb(255, 252, 242,0.2);

  p {
    padding-top: 0.5em;
  }
`;
