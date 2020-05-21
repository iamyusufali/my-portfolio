import React from 'react';

import Logo from '../../img/developer.svg';
import './header.styles.scss';

const Header = () => {
  return (
    <header>
      <main>
        <div className="text-container">
          <h1>
            I'm <span>Yusuf.</span>
          </h1>
          <h2>Front-end Engineer</h2>
        </div>
        <div className="image-container">
          <img alt="developer" src={Logo} />
        </div>
      </main>
    </header>
  );
};

export default Header;
