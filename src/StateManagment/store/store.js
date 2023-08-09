import { configureStore } from "@reduxjs/toolkit";
import booksReduces from "../Posts/BookSlice";
import postReducer from "../Posts/postSlice";


const store = configureStore({
    reducer :{
        posts : postReducer,
        booksReducer : booksReduces,
    }
})

export default store ;
