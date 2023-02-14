import React from "react";

const Layout = ({ children, loading }) => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      {children}
    </div>
  );
};

export default Layout;
