import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { VscAdd } from "react-icons/vsc";
import { HiViewGrid } from "react-icons/hi";

const menuItems = [
  { label: "Home", path: "/", id: 1, icon: <AiFillHome /> },
  {
    label: "All Posts",
    path: "/posts",
    id: 2,
    icon: <VscAdd />,
  },
  {
    label: "Add Post",
    path: "/userPosts",
    id: 3,
    icon: <HiViewGrid />,
  },
];

const SideNavbar = () => {
  return (
    <div className="fixed h-full w-[20%] shadow-md hidden md:block">
      {menuItems.map((label) => (
        <ul key={label.id}>
          <li className="py-16">
            <Link
              to={label.path}
              className="flex h-auto  justify-center m-auto items-center text-dark-blue"
            >
              <p className="w-[10%] text-start">{label.icon}</p>
              <p>{label.label}</p>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default SideNavbar;
