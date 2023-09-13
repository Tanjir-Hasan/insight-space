import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Posts/postSlice";
import categoriesReducer from "../Posts/categoriesSlice";
import bookMarksReducer from "../Posts/bookMarksSlice";
import MyPostsReducer from "../Posts/MyPostsSlice";


const store = configureStore({
    reducer: {
        posts: postReducer,
        categories: categoriesReducer,
        bookMarks: bookMarksReducer,
        myPosts: MyPostsReducer,
    }
})

export default store;
