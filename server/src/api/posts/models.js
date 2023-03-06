// define all post models
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
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
