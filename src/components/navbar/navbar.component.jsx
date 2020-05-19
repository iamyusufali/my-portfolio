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
      <div className="hamburger-box">
        <div className="hamburger-icon" onClick={() => setNavOpen(!navOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <nav className={navClass}>
        <div className="nav-link">
          <a href="/">About Me</a>
        </div>
        <div className="nav-link">
          <a href="/">TechStack</a>
        </div>
        <div className="nav-link">
          <a href="/">Projects</a>
        </div>
        <div className="nav-link">
          <a href="/">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
