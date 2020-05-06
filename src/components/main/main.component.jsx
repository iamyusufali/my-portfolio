import React from 'react';

import Logo from '../../img/developer.svg';
import './main.styles.scss';

const Main = () => {
  return (
    <div className="main-container">
      <div className="intro-container">
        <h3>Hey, I'm</h3>
        <h1>Yusuf</h1>
        <h2>Ali</h2>
      </div>
      <img alt="developer" src={Logo} />
      <div className="title-container">
        <h1>A Fanatic Web Developer</h1>
      </div>
    </div>
  );
};

export default Main;
