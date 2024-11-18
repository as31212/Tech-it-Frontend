import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productDataInterface } from "../../interfaces/productDataInterface";

const initialState: productDataInterface = {data:[],
    meta:{
        currentPage: 0,
        totalPages: 0,
        totalDocuments: 0
    }
};

const productDataSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    populate: (state, action: PayloadAction<productDataInterface>) => {
      return action.payload; // Replace the current state entirely with the payload
    },
  },
});

// Exporting the action to be dispatched
export const { populate } = productDataSlice.actions;

// Exporting the reducer to be used in the store
export default productDataSlice.reducer;
