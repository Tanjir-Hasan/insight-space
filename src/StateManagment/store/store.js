import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Posts/postSlice";

const store = configureStore({
    reducer :{
        posts : postReducer,
    }
})

export default store ;
