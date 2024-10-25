import { createSlice } from "@reduxjs/toolkit";

const productDataSlice = createSlice({
    name: "productData",
    initialState: [],
    reducers: {
        populate: (state, action) => {
            return action.payload; // Replace the current state entirely with the payload
        }
    }
});

// Exporting the action to be dispatched
export const { populate } = productDataSlice.actions;

// Exporting the reducer to be used in the store
export default productDataSlice.reducer;
