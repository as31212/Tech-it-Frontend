import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slices/userDataSlice"
import tokenReducer from "./slices/tokenSlice";
import productDataReducer from "./slices/productDataSlice";
import productReducer from "./slices/productSlice";
import cartDataReducer from "./slices/cartDataSlice";
import priceDataReducer from "./slices/priceDataSlice";

const reduxStore = configureStore({
    reducer:{
        "userData":userDataReducer, //user info
        "token": tokenReducer, // jwt token
        "productData": productDataReducer, //for products page
        "product": productReducer, //for product details page
        "cart": cartDataReducer, //for cart page and potential side bar
        "priceData": priceDataReducer //for order summary price info
    }
});

export default reduxStore;