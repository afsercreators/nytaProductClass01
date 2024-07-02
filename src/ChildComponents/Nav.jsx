import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar navbar-expand-lg ">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link fw-bold text-white" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-white" to="/">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
