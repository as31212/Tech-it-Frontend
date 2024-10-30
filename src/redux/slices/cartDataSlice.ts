import { createSlice } from "@reduxjs/toolkit";

const cartDataSlice = createSlice({
  name: "cart",
  initialState: {
    productId: {
      name: "",
      price: null,
      categories: [],
      description: null,
      mainImage: null,
      images: [],
    },
    quantity: null,
  },
  reducers: {
    populateCart: (state, action) => {
      return action.payload;
    },
  },
});

export const { populateCart } = cartDataSlice.actions;
export default cartDataSlice.reducer;
