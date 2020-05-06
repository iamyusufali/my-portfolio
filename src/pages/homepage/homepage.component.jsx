import React from 'react';

import './homepage.styles.scss';

import Navbar from '../../components/navbar/navbar.component';
import Intro from '../../components/intro/intro.component';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Intro />
    </div>
  );
};

export default HomePage;
