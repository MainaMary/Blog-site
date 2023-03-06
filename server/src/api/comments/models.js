// define comment models
import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    name: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const CommentsSchema = mongoose.model('Comment', commentsSchema);

export default CommentsSchema;
