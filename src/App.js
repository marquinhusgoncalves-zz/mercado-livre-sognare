import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/header'
import Main from './components/main/main'

import logo from './ml.png';
import './App.css';

function App () {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
