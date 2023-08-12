// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchBookMarks = createAsyncThunk("bookMarks/fetchBookMarks", async () => {
//     const res = await axios.get(`https://insight-space-server.vercel.app/book-marks?email=${email}`)
//     return res.data
// })
// const bookMarksSlice = createSlice({
//     name: "bookMarks",
//     initialState: {
//         isLoading: false,
//         bookMarks: [],
//         error: null,
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchBookMarks.pending, (state) => {
//             state.isLoading = true;
//         });
//         builder.addCase(fetchBookMarks.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.bookMarks = action.payload
//             state.error = null
//         });
//         builder.addCase(fetchBookMarks.rejected, (state, action) => {
//             state.isLoading = false;
//             state.bookMarks = []
//             state.error = action.error.message;
//         });

//     }
// })

// export default bookMarksSlice.reducer;
