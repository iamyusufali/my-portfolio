import React from 'react';

import Logo from '../../img/developer.svg';
import './header.styles.scss';

const Header = () => {
  return (
    <header>
      <main>
        <div className="text-container">
          <h3>Hello, I'm</h3>
          <h1>
            Yusuf <span>Ali</span>
          </h1>
          <h4>Front-end Engineer</h4>
        </div>
        <div className="image-container">
          <img alt="developer" src={Logo} />
        </div>
      </main>
    </header>
  );
};

export default Header;
