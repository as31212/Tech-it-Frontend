import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slices/userDataSlice"
import tokenReducer from "./slices/tokenSlice";
import productDataReducer from "./slices/productDataSlice";
import productReducer from "./slices/productSlice";

const reduxStore = configureStore({
    reducer:{
        "userData":userDataReducer,
        "token": tokenReducer,
        "productData": productDataReducer,
        "product": productReducer,
    }
});

export default reduxStore;