import { createSlice } from "@reduxjs/toolkit";

const instructorDataSlice = createSlice({
  name: "instructorData",
  initialState: {},
  reducers: {
    setInstructorData: (state, action) => {
      return action.payload; 
    },
  },
});

export const { setInstructorData } = instructorDataSlice.actions;
export default instructorDataSlice.reducer;