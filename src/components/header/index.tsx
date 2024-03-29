import React from "react";
import { Link } from "react-router-dom";
import Nav from "../nav";
import logo from "../../assets/logo.png";
import "./header.scss";

function Header() {
  return (
    <header>
      <div className="inner-header inner-container">
        <div className="logo-nav">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
