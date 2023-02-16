import React from "react";
import Header from "../Header";

const Layout = ({ children, loading }) => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
