import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Posts/postSlice";
import categoriesReducer from "../Posts/categoriesSlice";
import bookMarksReducer from "../Posts/bookMarksSlice";
import MyPostsReducer from "../Posts/MyPostsSlice";
import instructorDataReducer from "../Posts/instructorDataSlice";


const store = configureStore({
    reducer :{
        posts : postReducer,
        categories: categoriesReducer,
        bookMarks : bookMarksReducer ,
        myPosts : MyPostsReducer ,
        InstructorData : instructorDataReducer,
    }
})

export default store ;
