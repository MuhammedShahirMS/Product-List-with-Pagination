import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products-slice";


export const store = configureStore({
    reducer: productSlice.reducer     
});