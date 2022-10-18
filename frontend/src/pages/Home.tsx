import React from 'react';

import CopyrightImage from '../components/CopyrightImage';
import Navbar from '../components/Navbar';
import { HomePage } from '../styles/Home';

export default function Home(): JSX.Element {
  return (
    <HomePage>
      <Navbar />
      <CopyrightImage author="sebinthomas" />
    </HomePage>
  );
}
