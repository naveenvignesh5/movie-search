import React, { useState, forwardRef, useEffect, useRef } from "react";

// custom hooks
import { useClickOutside } from "../../hooks";

import "./Dropdown.css";

const BasicDropdown = ({ label, innerRef, items = [] }) => {
  const [active, setActive] = useState(false);
  const [currentItem, setItem] = useState("");

  const wrapperRef = useRef();

  useClickOutside(wrapperRef, () => setActive(false));

  const toggleDropdown = () => {
    setActive((active) => !active);
  };

  const handleSetItem = (item) => {
    setItem(item);
    setActive(false);

    if (innerRef.hasOwnProperty("current")) {
      innerRef.current = {
        value: item,
      };
      return;
    }

    innerRef.value = item;
  };

  useEffect(() => {
    innerRef.current = {
      value: "",
    };
  }, [innerRef]);

  return (
    <div ref={wrapperRef} className={`dropdown ${active ? "is-active" : ""}`}>
      <div className="dropdown-trigger">
        <button
          className="button has-text-primary"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={toggleDropdown}
        >
          <span className="has-text-weight-bold">{currentItem || label}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {items.map((item, itemIndex) => (
            <a
              className="dropdown-item"
              onClick={() => handleSetItem(item)}
              key={`${label}_${item}_${itemIndex}`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Dropdown = forwardRef((props, ref) => (
  <BasicDropdown {...props} innerRef={ref} />
));
