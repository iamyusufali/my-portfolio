import React from 'react';

import shapeOne from '../../img/shapeOne.svg';
import shapeTwo from '../../img/shapeTwo.svg';
import shapeThree from '../../img/shapeThree.svg';

import './about.styles.scss';

const About = () => {
  return (
    <section>
      <article>
        <h1>About Me</h1>
        <p>
          I'm a 22y old self-taught Front-end Engineer 👨‍💻 from India, enjoying
          every aspect of programming and always experimenting with new stuff. I
          can design all kind of websites and do some magic 🧙‍♀️ with Javascript.
          I'm from a non-tech background and have passion to explore new
          technologies 🤖 and play with them. I also play football ⚽ and love
          watching it.
        </p>
        <img className="shape-one" alt="" src={shapeOne} />
        <img className="shape-two" alt="" src={shapeTwo} />
        <img className="shape-three" alt="" src={shapeThree} />
      </article>
    </section>
  );
};

export default About;
