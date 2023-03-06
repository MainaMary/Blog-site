// @ts-check
//comment routes
import express from "express";

import {
  createComment,
  getAllPostComments,
  getSingleComment,
  updateComment,
} from "./controllers";
import { checkAuth } from "../middleware/auth";

const router = express.Router();
router.post("/comment", checkAuth, createComment);
router.get("/post-comments", checkAuth, getAllPostComments);
router.get("/comment/:id", checkAuth, getSingleComment);
router.put("/comment/:id", checkAuth, updateComment);

export default router;
