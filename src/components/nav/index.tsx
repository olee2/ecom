import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Nav;
