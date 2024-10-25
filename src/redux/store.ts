import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slices/userDataSlice"
import tokenReducer from "./slices/tokenSlice";

const reduxStore = configureStore({
    reducer:{
        "userData":userDataReducer,
        "token": tokenReducer,
    }
});

export default reduxStore;