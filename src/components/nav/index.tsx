import React, { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../../assets/hamburger.svg";
import "./styles.scss";
import Cart from "../cart";

function Nav() {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <nav>
      <button type="button" className="hamburger" onClick={handleDisplay}>
        <img src={hamburger} alt="" />
      </button>

      <div className={`nav-container ${display && "show"}`}>
        <div className="link-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
        <Link to="/cart">
          <Cart />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
