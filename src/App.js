import React from 'react';

import Main from './components/main/main.component';

import './App.scss';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <div>
      <Navbar/>
      <Main />
    </div>
  );
}

export default App;
