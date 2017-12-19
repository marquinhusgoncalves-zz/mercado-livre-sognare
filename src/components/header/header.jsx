import React from 'react'
// import PropTypes from 'prop-types';
import SearchBar from '../search-bar/search-bar'

function Header ( {getValue} ) {
  return (
    <header className="header">
      <div className="wrapper">
        <h1 className="header-title">
          <a href="http://localhost:3000/">
            {/*<img src={logo} className="header-logo" alt="Logo" />*/}
          </a>
        </h1>
        <SearchBar getValue={getValue} />
      </div>
    </header>
  );
}

export default Header;
