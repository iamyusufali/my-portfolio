import React, { useState } from 'react';

import { FiMenu, FiX } from 'react-icons/fi';

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
          {!navOpen ? (
            <FiMenu size="100%" color="#37474f" />
          ) : (
            <FiX size="100%" color="#37474f" />
          )}
        </div>
      </div>
      <nav className={navClass}>
        <div className="logo">
          <h2>Yusuf Ali</h2>
        </div>
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
