import React from 'react';
import '../styles/SearchBar.scss';

const SearchBar = ({ handleSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by title"
      onChange={handleSearchChange}
      className="search-bar"
    />
  );
};

export default SearchBar;

