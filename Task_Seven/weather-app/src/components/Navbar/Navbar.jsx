// Navbar.jsx
import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <i className="ri-sun-line logo-icon"></i>
        <span className="logo-text">Weatherly</span>
      </div>

      <form className="search-box" onSubmit={handleSearch}>
        <i className="ri-search-line search-icon"></i>
        <input
          type="text"
          placeholder="Search for a city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Navbar;
