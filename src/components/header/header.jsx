import React from 'react';
import SearchBar from '../search-bar/search-bar';

import logo from '../../../src/ml.png';

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <h1 className="header-title">
          <a href="http://localhost:3000/">
            <img src={logo} className="header-logo" alt="Logo" />
          </a>
        </h1>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
