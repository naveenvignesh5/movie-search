import React, { useState } from "react";

export const Navbar = ({ onItemPress, showFav }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive((active) => !active);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <p className="navbar-item is-size-4">Movie Search</p>
        <a
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          onClick={toggleNav}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          <a className="navbar-item has-text-weigh-bold" onClick={onItemPress}>
            {showFav ? "Favourites" : "Home"}
          </a>
        </div>
      </div>
    </nav>
  );
};
