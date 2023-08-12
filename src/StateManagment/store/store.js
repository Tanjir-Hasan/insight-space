import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Posts/postSlice";
// import bookMarksReducers from "../Posts/bookMarksSlice";


const store = configureStore({
    reducer :{
        posts : postReducer,
        // bookMarks : bookMarksReducers ,
    }
})

export default store ;
