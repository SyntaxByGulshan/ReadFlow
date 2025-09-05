import { configureStore } from "@reduxjs/toolkit";
 
import searchedBooksReducer from './slice/searchedBooksSlice'
export  const store=configureStore({
    reducer:{
         searchedBooks:searchedBooksReducer,
    }
})

