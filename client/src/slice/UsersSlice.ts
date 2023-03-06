import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../model/types";
import { baseUrl } from "../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";


interface Props {
  userItems: UserProps[];
  
}
enum Status {
    idle = "idle",
    pending = "pending",
    succeeded = " succeeded",
    failed = "failed",
  }
const initialState: Props = {
  userItems: [],
};
export const getUsers = createAsyncThunk<UserProps[]>(
    "users/getUsers",
    async () => {
      const response = await baseUrl.get("/users");
      return response?.data as UserProps[];
    }
  );
const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state: any, action: PayloadAction<any>) =>{

    }
  },
  extraReducers:{}
});

export const {
  addUser
} = UsersSlice.actions;
export default UsersSlice.reducer;
