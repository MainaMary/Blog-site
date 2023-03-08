import React from "react";
import { Routes, Route } from "react-router-dom";
const Login = React.lazy(() => import("../pages/Login"));
const AllPosts = React.lazy(() => import("../pages/posts/AllPosts"));
const NotFound = React.lazy(() => import("../pages/error/NotFound"));
const Home = React.lazy(() => import("../pages/Home"));
const SinglePost = React.lazy(() => import("../pages/posts/SinglePost"));
const Posts = React.lazy(() => import("../pages/users/Posts"));
const UserSinglePost = React.lazy(() =>import("../pages/users/UserSinglePost"))

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<AllPosts />} />
      <Route path="/userPosts" element={<Posts />} />
      <Route path="/singlePost/:id" element={<SinglePost />} />
      <Route path="/userPost/:id" element={<UserSinglePost/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};

export default Allroutes;
