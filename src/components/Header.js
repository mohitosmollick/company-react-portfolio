import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt=" " />
          </Link>
          <button className="btn btn-sm">Word with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
