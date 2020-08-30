import React, { useState } from "react";

export const Navbar = ({ showFav, onItemPress }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive((active) => !active);
  };

  return (
    <nav
      className="navbar has-background-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <p className="navbar-item is-size-4">Movie Search</p>
        <a
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          onClick={toggleNav}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          <a
            className="navbar-item has-text-info has-text-weight-bold"
            onClick={onItemPress}
          >
            {showFav ? "Home" : "Favourites"}
          </a>
        </div>
      </div>
    </nav>
  );
};
