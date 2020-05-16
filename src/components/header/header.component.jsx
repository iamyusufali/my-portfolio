import React from 'react';

import Logo from '../../img/developer.svg';
import './header.styles.scss';

const Header = () => {
  return (
    <main>
      <div className="text-container">
        <h3>Hello, I'm</h3>
        <h1>
          Yusuf <span>Ali</span>
        </h1>
        <h4>a fanatic developer</h4>
      </div>
      <div className="image-container">
        <img alt="developer" src={Logo} />
      </div>
    </main>
  );
};

export default Header;
