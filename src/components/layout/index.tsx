import React from "react";
import Header from "../header";
import Footer from "../footer";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { children } = props;
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
