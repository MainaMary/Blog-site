// @ts-check
//post routes
import express from "express";

import {
  createPost,
  getPosts,
  getSinglePost,
  getPostsByUser,
  updatePost,
  deletePost
} from "./controllers";
import { checkAuth } from "../middleware/auth";

const router = express.Router();
// router.post("/post", checkAuth, createPost);
// router.get("/post", checkAuth, getPosts);
// router.get("/user-posts", checkAuth, getPostsByUser);
// router.get("/post/:id", checkAuth, getSinglePost);
// router.put("/post/:id", checkAuth, updatePost);

router.post("/post",  createPost);
router.get("/post", getPosts);
router.get("/user-posts",  getPostsByUser);
router.get("/post/:id", getSinglePost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost)

export default router;
