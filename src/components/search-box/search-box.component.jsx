import React from "react";
import "./search-box.styles.css";
const SearchBox = ({ onSearchChange, placeholder, className }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
