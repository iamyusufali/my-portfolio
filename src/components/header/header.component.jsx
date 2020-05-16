import React from 'react';

import Logo from '../../img/developer.svg';
import './header.styles.scss';

const Header = () => {
  return (
    <header>
      <main>
        <div className="intro-container">
          <h3>Hey, I'm</h3>
          <div className="name">
            <h1>Yusuf</h1>
            <h2>Ali</h2>
          </div>
          <h4>a Fanatic Developer</h4>
        </div>
        <div className="image-container">
          <img alt="developer" src={Logo} />
        </div>
      </main>
    </header>
  );
};

export default Header;
