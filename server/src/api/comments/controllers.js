//@ts-check
// methods for routes
import paginate from "jw-paginate"

import {
  getPostComments, getCommentById, addComment, editComment
} from "./db";

const createComment = async (req, res) => {
  try {
    const payload = {
      body: req.body.body,
      name: req.body.name,
      postId: req.body.postId,
      email: req.body.email,
    };
    const comment = await addComment({
      ...payload,
    });
    res.status(200).json({
      status: true,
      data: comment,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err,
      status: false,
    });
  }
};

const getAllPostComments = async (req, res) => {
  try {
    const postId = req.query.postId;
    const data = await getPostComments(postId);
     // get page from query params or default to first page
     const page = parseInt(req.query.page) || 1;
     // get pager object for specified page or default to five
     const pageSize = parseInt(req.query.pageSize) || 5;
     const pager = paginate(data?.length, page, pageSize);
     // get page of items from items array
     const pageOfItems = data.slice(pager.startIndex, pager.endIndex + 1);
     //get sort criteria or default to asc
     const sortOption = req.query.sortOption;
     pageOfItems.sort(function(a, b){return sortOption === 'desc' ?  b.price - a.price:  a.price - b.price});
    res.status(200).json({
      status: true,
      data: pageOfItems,
      totalItems: pager.totalItems,
      currentPage: pager.currentPage,
      pageSize: pager.pageSize,
      totalPages: pager.totalPages,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err,
      status: false,
    });
  }
};


const getSingleComment = async (req, res) => {
  try {
    const id = req.params.id;
    const commentDetails = await getCommentById(id);
    res.status(200).json({
      status: true,
      data: commentDetails,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      error: err,
    });
  }
};


const updateComment = async (req, res) => {
  try {
    const id = req.params.id;
    const updateOps = {};
    for (const [key, value] of Object.entries(req.body)) {
      updateOps[key] = value;
    }
    const commentDetails = await editComment(id, updateOps);
    res.status(200).json({
      status: true,
      data: commentDetails,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      error: err,
    });
  }
};

export {
  createComment,
  getAllPostComments,
  getSingleComment,
  updateComment,
};
