import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { CommentProps } from "../model/types";
import { baseUrl } from "../api/api";

enum Status {
  pending= "pending",
  fulfilled = " fulfilled",
  rejected = "rejected",
}
interface Props {
  commentItems: CommentProps[];
  status: any
  
}

const initialState: Props = {
  commentItems: [],
  status: Status
};
//comments thunk
export const fetchComments = createAsyncThunk("comments/fetchComments", async () => {
  try {
    const response = await baseUrl.get(
      "/comments"
    );
    return response?.data?.slice(0, 15);
  } catch (error: any) {
    console.log(error.messaage);
  }
});
const CommentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state: typeof initialState, action: PayloadAction<CommentProps>) =>{
     console.log(action.payload,'payload')
     state.commentItems.push( action.payload)
    console.log(state.commentItems,'new comment')
       
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.commentItems= action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const {
  addComment
} = CommentSlice.actions;
const commentReducer = CommentSlice.reducer
export {commentReducer}
 