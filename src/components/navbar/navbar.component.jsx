import React, { useState } from 'react';

import './hamburgers/hamburgers.scss';
import './navbar.styles.scss';

const Navbar = () => {
  const [isHamOpen, setHamStatus] = useState(false);

  let hamClass = 'hamburger hamburger--elastic',
    navClass = 'nav-links',
    linkClass = '';

  if (isHamOpen) {
    hamClass = 'hamburger hamburger--elastic is-active';
    navClass = 'nav-links open';
    linkClass = 'fade';
  }

  return (
    <nav>
      <div
        className="ham-icon"
        class={hamClass}
        onClick={() => setHamStatus(!isHamOpen)}
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
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
    </nav>
  );
};

export default Navbar;
