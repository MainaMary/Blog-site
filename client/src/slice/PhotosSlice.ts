import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../api/api";

const initialState = {
  data: [],
  status: "",
};
//Photos thunk
export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  try {
    const response = await baseUrl.get(
      "/photos"
    );

    return response?.data?.slice(0, 25);
  } catch (error: any) {
    console.log(error.messaage);
  }
});

// Photos slice...
const photos = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

// Action creators...

const photosReducer = photos.reducer;

// Export...
export { photosReducer };
