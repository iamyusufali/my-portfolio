import React, { useState } from 'react';

import './navbar.styles.scss';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  let navClass = '';
  if (navOpen) {
    navClass = 'open';
  }

  return (
    <div>
      <div className="hamburger-icon" onClick={() => setNavOpen(!navOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={navClass}>
        <div className="nav-link">
          <a>About Me</a>
        </div>
        <div className="nav-link">
          <a>TechStack</a>
        </div>
        <div className="nav-link">
          <a>Projects</a>
        </div>
        <div className="nav-link">
          <a>Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
