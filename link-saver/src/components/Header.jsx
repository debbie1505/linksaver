import React from "react";
import logo from "/assets/Designer.png";

function Header() {
  return (
    <header className="flex items-center justify-center bg-[#6943FF] py-4">
      <img
        src={logo}
        alt="logo"
        className="w-16 h-16 shadow-sm mr-2"
      />
      <h1 className="text-2xl font-semibold text-white">LinkSaver</h1>
    </header>
  );
}

export default Header;
