import { createSlice } from "@reduxjs/toolkit";
import { productFilterInterface } from "../../interfaces/productFiltersInterface";

const initialState: productFilterInterface = {
  price: null,
  categories: [],
  sort: "",
  isInitialized:false
};

const productFilterSlice = createSlice({
  name: "productFilters",
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.categories.includes(category)) {
        state.categories = state.categories.filter((cat) => cat !== category);
      } else {
        state.categories.push(category);
      }
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    initialize: (state)=>{
        state.isInitialized = true;
    },
    initializeFilter: (state,action)=>{
        state.price = action.payload.price;
        state.categories = action.payload.categories;
        state.sort = action.payload.sort;
        state.isInitialized = true;
    },
    resetFilters: () => initialState,
  },
});

export const {toggleCategory,setSort,setPrice,initializeFilter, initialize,resetFilters} = productFilterSlice.actions;
export default productFilterSlice.reducer;