import { cartInterface } from './../../interfaces/cartInterface';
import { createSlice } from "@reduxjs/toolkit";

const initialState: cartInterface[] = [];

const cartDataSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    populateCart: (state, action) => {
      return action.payload;
    },
    addItem:(state,action)=>{
      return [...state,action.payload];
    }
  },
});

export const { populateCart,addItem } = cartDataSlice.actions;
export default cartDataSlice.reducer;
