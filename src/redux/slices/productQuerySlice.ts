import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryPayloadInterface } from "../../interfaces/queryPayloadInterface";

const productQuerySlice = createSlice({
  name: "productQuery",
  initialState: "",
  reducers: {
    createQuery: (state, action: PayloadAction<QueryPayloadInterface>) => {
      const { categories, price, sort } = action.payload;

      // Create category query part
      const categoryString = categories.map(cat => `categories=${cat}`).join("&");

      // Create price query part
      const priceString = `price=${price}`;

      // Create sort query part, if sort is present
      const sortString = sort ? `sort=${sort}` : "";

      // Combine query parts
      const query = `?${[categoryString, priceString, sortString].filter(Boolean).join("&")}`;

      return query;
    },
  },
});

export const { createQuery } = productQuerySlice.actions;
export default productQuerySlice.reducer;
