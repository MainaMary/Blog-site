// define all post models
import mongoose from "mongoose";
//mongoose.Schema.Types.ObjectId
const postSchema = new mongoose.Schema({
//   userId: {
//     type: String,
//     ref: "User",
// },
userId: {
  type: String,
  ref: "User",
},
  title: {
    type: String,
    required: [true, "Please include the post title"],
  },
  body: {
    type: String,
    required: [true, "Please include the post body"],
  },
}, {
  timestamps: true
});

const Post = mongoose.model("Post", postSchema);

export default Post;
