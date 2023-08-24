import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Posts/postSlice";
import categoriesReducer from "../Posts/categoriesSlice";


const store = configureStore({
    reducer :{
        posts : postReducer,
        categories: categoriesReducer,
    }
})

export default store ;
