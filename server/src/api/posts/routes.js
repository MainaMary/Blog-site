// @ts-check
//post routes
import express from "express";

import {
  createPost,
  getPosts,
  getSinglePost,
  getPostsByUser,
  updatePost,
} from "./controllers";
import { checkAuth } from "../middleware/auth";

const router = express.Router();
router.post("/post", checkAuth, createPost);
router.get("/post", checkAuth, getPosts);
router.get("/user-posts", checkAuth, getPostsByUser);
router.get("/post/:id", checkAuth, getSinglePost);
router.put("/post/:id", checkAuth, updatePost);

export default router;
