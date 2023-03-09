import React from "react";
import NavLink from "./NavLink";


const SideNavbar = () => {
  return (
    <div className="fixed h-full w-[20%] shadow-md hidden md:block">
     <NavLink/>
    </div>
  );
};

export default SideNavbar;
