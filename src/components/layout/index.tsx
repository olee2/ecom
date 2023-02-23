import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import "./styles.scss";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
