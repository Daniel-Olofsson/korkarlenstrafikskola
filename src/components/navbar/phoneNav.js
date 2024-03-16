import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = ({ toggleNav }) => {
  return (
    <div className="mobile-nav">
      <ul>
        <li>
          <NavLink to="/" exact="true" onClick={toggleNav}>
            Hem
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact="true" onClick={toggleNav}>
            Om Oss
          </NavLink>
        </li>
        <li>
          <NavLink to="/price" exact="true" onClick={toggleNav}>
            Priser
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
