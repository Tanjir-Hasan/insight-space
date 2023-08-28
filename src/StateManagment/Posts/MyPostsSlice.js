import { createSlice } from "@reduxjs/toolkit";

const myPostsSlice = createSlice({
  name: "myPosts",
  initialState: [],
  reducers: {
    setMyPosts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMyPosts } = myPostsSlice.actions;
export default myPostsSlice.reducer;