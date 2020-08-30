import React from "react";

export const SearchBar = () => {
  const handleSearch = () => {};

  return (
    <div className="field has-addons">
      <div className="control">
        <input className="input" type="text" placeholder="Find a repository" />
      </div>
      <div className="control">
        <button className="button is-info" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
