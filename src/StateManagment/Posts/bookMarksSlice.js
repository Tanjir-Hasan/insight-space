import { createSlice } from "@reduxjs/toolkit";

const bookMarksSlice = createSlice({
  name: "bookMarks",
  initialState: [],
  reducers: {
    setBookMarks: (state, action) => {
      return action.payload;
    },
  },
});

export const { setBookMarks } = bookMarksSlice.actions;
export default bookMarksSlice.reducer;