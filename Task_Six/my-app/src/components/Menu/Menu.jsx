import React from "react";

const Menu = () => {
  return (
    <div className="container">
      <div className="menu">
        <div className="title">
          <h1>FreelancePro</h1>
        </div>
        <ul>
          <li>
            <a href="/Dashboard">
              <i className="ri-bar-chart-line"></i> Overview
            </a>
          </li>
          <li>
            <a href="/project">
              <i className="ri-folders-line"></i> Projects
            </a>
          </li>
          <li>
            <a href="/profile">
              <i className="ri-user-3-line"></i> Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
