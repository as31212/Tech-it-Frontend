import { createSlice } from "@reduxjs/toolkit";
import { productFilterInterface } from "../../interfaces/productFiltersInterface";

const initialState: productFilterInterface = {
  price: null,
  categories: [],
  sort: "",
  page: 1,
  isInitialized: false,
  mobileToggle: false
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
    incrementPage: (state, action) => {
      if (state.page < action.payload) {
        state.page += 1;
      }
    },
    decrementPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
    setPage: (state,action)=>{
      state.page = action.payload;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    initialize: (state) => {
      state.isInitialized = true;
    },
    initializeFilter: (state, action) => {
      state.price = action.payload.price;
      state.categories = action.payload.categories;
      state.sort = action.payload.sort;
      state.page = Number(action.payload.page);
      state.isInitialized = true;
    },
    resetFilters: () => initialState,
    toggleMobile: (state) => {
      state.mobileToggle = !state.mobileToggle;
    },
  },
});

export const {
  toggleCategory,
  setSort,
  setPrice,
  initializeFilter,
  initialize,
  resetFilters,
  incrementPage,
  decrementPage,
  resetPage,
  setPage,
  toggleMobile
} = productFilterSlice.actions;
export default productFilterSlice.reducer;
