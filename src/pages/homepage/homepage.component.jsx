import React from 'react';

import Navbar from '../../components/navbar/navbar.component';
import Main from '../../components/main/main.component';

import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Main />
    </div>
  );
};

export default HomePage;
