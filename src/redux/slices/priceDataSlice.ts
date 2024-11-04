import { createSlice } from "@reduxjs/toolkit";

const priceDataSlice = createSlice({
    name:"priceData",
    initialState:{
        originalPrice:0,
        salesTax:0,
        totalPrice:0
    },
    reducers:{
        changePrice: (state,action)=>{
            state.originalPrice = action.payload.originalPrice;
            state.salesTax = action.payload.salesTax;
            state.totalPrice = action.payload.totalPrice;
        }
    }
});

export const {changePrice} = priceDataSlice.actions;

export default priceDataSlice.reducer;