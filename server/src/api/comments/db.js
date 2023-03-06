//@ts-check
// define our DB requests for comment models
import Comment from "./models";

const getPostComments = async (postId) => {
  const comments = await Comment.find({}).select({ postId: postId, _id: 0 });
  return comments;
};

const getCommentById = async (id) => {
  const comment = await Comment.findById(id);
  return comment;
};

const addComment = async (payload) => {
  const newComment = await Comment.create(payload);
  return newComment;
};

const editComment = async (id, updateOps) => {
  await Comment.updateOne({ _id: id }, { $set: updateOps });
  const updatedComment = await Comment.findById(id);
  return updatedComment;
};

export { getPostComments, getCommentById, addComment, editComment };
