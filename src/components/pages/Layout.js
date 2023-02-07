import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Layout = ({ children, loading }) => {
  return (
    <>
      {loading ? (
        <div className="pre_loading">
          <RingLoader
            color="#ff006b"
            cssOverride={{}}
            loading
            size={90}
            speedMultiplier={1}
          />

          <h2 className="text-gradient h4 mt-12 ml-8"> Loading ...</h2>
        </div>
      ) : (
        <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
