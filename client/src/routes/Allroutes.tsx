import React from "react";
import { Routes, Route } from "react-router-dom";
const Login = React.lazy(() => import("../pages/Login"));
const AllPosts = React.lazy(() => import("../pages/posts/AllPosts"));
const AddPost = React.lazy(() => import("../pages/users/AddPost"));
const Home = React.lazy(() => import("../pages/Home"));
const SinglePost = React.lazy(() => import("../pages/posts/SinglePost"));
const Posts = React.lazy(() => import("../pages/users/Posts"));

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/sideNavbar" element={<SideNavbar />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<AllPosts />} />
      <Route path="/userPosts" element={<Posts />} />
      <Route path="/singlePost/:id" element={<SinglePost />} />
    </Routes>
  );
};

export default Allroutes;
