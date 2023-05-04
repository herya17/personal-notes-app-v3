import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineSearch } from "react-icons/md";

function SearchBar({ keyword, keywordChange }) {
  return (
    <div className='search-bar'>
      <input
        className='input'
        type='text'
        placeholder='Search notes'
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)} />
    </div>
  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
}

export default SearchBar;
