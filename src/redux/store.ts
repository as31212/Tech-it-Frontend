import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slices/userDataSlice"
import tokenReducer from "./slices/tokenSlice";
import productDataReducer from "./slices/productDataSlice";

const reduxStore = configureStore({
    reducer:{
        "userData":userDataReducer,
        "token": tokenReducer,
        "productData": productDataReducer,
    }
});

export default reduxStore;