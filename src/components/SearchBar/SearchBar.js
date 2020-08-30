import React, { useRef } from "react";

// components
import { Dropdown } from "../Dropdown";

import "./SearchBar.css";

export const SearchBar = ({ onSearch, ...inputProps }) => {
  const searchInput = useRef();
  const typeInput = useRef();

  const handleSearch = () => {
    onSearch({
      type: typeInput.current.value,
      title: searchInput.current.value,
    });
  };

  return (
    <div className="field search-bar has-addons">
      <div className="control">
        <input
          ref={searchInput}
          className="input"
          type="text"
          {...inputProps}
        />
      </div>
      <div className="control">
        <Dropdown
          label="Type"
          items={["movie", "series", "episode"]}
          ref={typeInput}
        />
      </div>
      <div className="control">
        <button className="button is-info" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
