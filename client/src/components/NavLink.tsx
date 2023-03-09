import React from 'react'
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { VscAdd } from "react-icons/vsc";
import { HiViewGrid } from "react-icons/hi";
import { MenuProps } from "../model/types";

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
interface P {
    onClick? : (x:any) =>void
}
const NavLink = ({onClick}:P) => {
  return (
    <div>
        {menuItems.map((label:MenuProps) => 
        <ul key={label.id} className="w-full">
          <li className="py-16">
            <Link
             onClick={onClick}
              to={label.path}
              className="flex h-auto  justify-center m-auto items-center text-dark-blue"
            >
              <p className="w-[10%] text-start">{label.icon}</p>
              <p>{label.label}</p>
            </Link>
          </li>
        </ul>
      )}

    </div>
  )
}

export default NavLink