import React from 'react';

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
          <img
            alt="developer"
            src="https://my-portfolio-image.s3.ap-south-1.amazonaws.com/developer.svg"
          />
        </div>
      </main>
    </header>
  );
};

export default Header;
