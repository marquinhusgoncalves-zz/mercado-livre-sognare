import React from 'react';

function SearchBar () {
  return (
    <form className="search-bar" action="/items">
      <input type="text" className="search-input" name="search" placeholder="O que você procura..." />
      <button type="submit" className="search-button">Buscar
        <i className="search-icon"></i>
      </button>
    </form>
  );
}

export default SearchBar;
