import React from "react";
import { Routes, Route } from "react-router-dom";
const Login = React.lazy(() => import("../pages/Login"));
const AllPosts = React.lazy(() => import("../pages/posts/AllPosts"));
const AddPost = React.lazy(() => import("../pages/posts/AddPost"));
const Home = React.lazy(() => import("../pages/Home"));
const SinglePost = React.lazy(() => import("../pages/posts/SinglePost"))

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/sideNavbar" element={<SideNavbar />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<AllPosts />} />
      <Route path="/createPosts" element={<AddPost />} />
      <Route path="/singlePost/:id" element={<SinglePost/>}/>
      http://localhost:5173/singlePost/1
    </Routes>
  );
};

export default Allroutes;
