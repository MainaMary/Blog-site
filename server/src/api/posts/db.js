// define our DB requests for post models
import Post from "./models";

const posts = async () => {
  const posts = await Post.find()
  return posts;
};

const getUserPosts = async (userId) => {
  const posts = await Post.find({userId});
  return posts

}

const getPostById = async (id) => {
  const post = await Post.findById(id).populate('comments');
  console.log({id:post._id});
  console.log({comments: post.comments[0].postId});
  return post;
};

const deletePostById = async (id) =>{
  const post = await Post.findByIdAndRemove(id)
  return post
}
const addPost = async (payload) => {
  const newpost = await Post.create(payload);
  return newpost;
};

const editPost = async (id, updateOps) => {
    await Post.updateOne({_id: id}, {$set: updateOps})
    const updatedpost = await Post.findById(id);
    return updatedpost;
  }

export {
    posts, getPostById, addPost, editPost, getUserPosts, deletePostById
}
