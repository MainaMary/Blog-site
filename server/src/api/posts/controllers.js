//@ts-check
// methods for routes
import paginate from "jw-paginate"

import {
  posts,
  getPostById,
  addPost,
  getUserPosts,
  editPost,
  deletePostById
} from "./db";

const createPost = async (req, res) => {
  try {
    const payload = {
      body: req.body.body,
      title: req.body.title,
      userId: req.body.userId
    };
    const post = await addPost({
      ...payload,
    });
    res.status(200).json({
      status: true,
      data: post,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err,
      status: false,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const data = await posts();
     // get page from query params or default to first page
     const page = parseInt(req.query.page) || 1;
     // get pager object for specified page or default to five
     const pageSize = parseInt(req.query.pageSize) || 10;
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

const getPostsByUser = async (req, res) => {
  try {
    const userId = req.query.userId;
    const data = await getUserPosts(userId);
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


const getSinglePost = async (req, res) => {
  try {
    const id = req.params.id;
    const postDetails = await getPostById(id);
    res.status(200).json({
      status: true,
      data: postDetails,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      error: err,
    });
  }
};

const deletePost = async (req, res) =>{
  try{
    const id = req.params.id
    const deleteDetails = await deletePostById(id);
    res.status(200).json({
      status: true,
      data: deleteDetails,
    });
  }
  catch(err){
    res.status(400).json({
      status: false,
      error: err,
    });
  }
}

const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const updateOps = {};
    for (const [key, value] of Object.entries(req.body)) {
      updateOps[key] = value;
    }
    const postDetails = await editPost(id, updateOps);
    res.status(200).json({
      status: true,
      data: postDetails,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      error: err,
    });
  }
};

export {
  createPost,
  getPosts,
  getSinglePost,
  getPostsByUser,
  updatePost,
  deletePost
};
