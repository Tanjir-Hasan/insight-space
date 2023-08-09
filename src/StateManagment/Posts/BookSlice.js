import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books : [
        {
            id: 1 , title: "love" , name: 'shamim'
        },
        {
            id: 2 , title: "love" , name: 'shamim'
        },
    ]
};

export const booksSlice = createSlice({
    name: "books",
    initialState : initialBooks,
    reducers : {
        showBooks : (state) => state,
    },
})

export const {showBooks} = booksSlice.actions;
export default booksSlice.reducer;