import React from 'react';

import { StyledCopyrightImage } from '../styles/Home';

export default function CopyrightImage(props: { author: string }): JSX.Element {
  const { author } = props;
  return (
    <StyledCopyrightImage>
      <a
        target="_blank"
        href={`https://unsplash.com/${author}`}
        rel="noopener noreferrer"
      >
        {author}
        <span>
          {' '}
          - Image Author
        </span>
      </a>
    </StyledCopyrightImage>
  );
}
