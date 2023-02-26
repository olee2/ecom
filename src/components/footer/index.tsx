import React from "react";
import "./styles.scss";
import Copyright from "../../assets/copyright.svg";

function Footer() {
  return (
    <footer>
      <div className="inner-container">
        <div>
          <h2>Ecom Ltd</h2>
          <div className="copyright-container">
            <p>Copyright</p>
            <img src={Copyright} alt="" className="copyright" />
            <p>2023. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
