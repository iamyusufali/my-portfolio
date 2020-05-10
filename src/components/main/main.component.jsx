import React from 'react';

import Navbar from '../navbar/navbar.component';

import Logo from '../../img/developer.svg';
import './main.styles.scss';

const Main = () => {
  return (
    <header>
      <Navbar />
      <main>
        <div className="intro-container">
          <h3>Hey, I'm</h3>
          <div className="name">
            <h1>Yusuf</h1>
            <h2>Ali</h2>
          </div>
          <h4>a Front End Dev</h4>
        </div>
      </main>
    </header>
  );
};

export default Main;
