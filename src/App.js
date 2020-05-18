import React from 'react';

import Navbar from './components/navbar/navbar.component';
import Header from './components/header/header.component';
import About from './components/about/about.component';

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
