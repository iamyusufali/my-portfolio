import React from 'react';

import Navbar from './components/navbar/Navbar.component';
import Header from './components/header/Header.component';
import About from './components/about/About.component';

import './App.scss';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
