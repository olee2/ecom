import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import logo from "../../assets/logo.png";

import "./styles.scss";

function Header() {
  return (
    <header>
      <div className="inner-header">
        <div className="logo-nav">
          <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
