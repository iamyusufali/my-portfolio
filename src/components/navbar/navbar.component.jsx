import React, { useState } from 'react';

import HamburgerMenu from 'react-hamburger-menu';

import './navbar.styles.scss';

const Navbar = () => {
  const [isHamOpen, setHamStatus] = useState(false);

  let navClass = 'nav-links',
    linkClass = '';

  if (isHamOpen) {
    navClass = 'nav-links open';
    linkClass = 'fade';
  }

  return (
    <nav>
      <div className="ham-container">
        <HamburgerMenu
          className="hamburger"
          isOpen={isHamOpen}
          menuClicked={() => setHamStatus(!isHamOpen)}
          strokeWidth={1}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.6}
        />
      </div>
      <div>
        <ul className={navClass}>
          <li className={linkClass}>
            <a href="#">About Me</a>
          </li>
          <li className={linkClass}>
            <a href="#">TechStack</a>
          </li>
          <li className={linkClass}>
            <a href="#">Projects</a>
          </li>
          <li className={linkClass}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
