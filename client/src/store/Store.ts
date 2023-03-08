
import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { postsApi } from "../features/postsApi";
import {commentReducer} from "../slice/CommentsSlice";
import usersReducer from "../slice/UsersSlice"
import { photosReducer } from "../slice/PhotosSlice";
import { editReducer } from "../slice/EditSlice";
import { useDispatch, useSelector,TypedUseSelectorHook } from "react-redux";
import { userspostsApi } from "../features/user/userPostApi";
import { commentPostsApi } from "../features/user/commentApi";

export const store = configureStore({
  reducer: {
    comments: commentReducer,
    users: usersReducer,
    photos: photosReducer,
    edit: editReducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [userspostsApi.reducerPath]: userspostsApi.reducer,
    [commentPostsApi.reducerPath] :commentPostsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, userspostsApi.middleware, commentPostsApi.middleware),
    
   
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export {useAppDispatch, useAppSelector}