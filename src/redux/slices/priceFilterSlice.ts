import { createSlice } from "@reduxjs/toolkit";

const priceRangeSlice = createSlice({
    name:"priceRange",
    initialState: 1000000,
    reducers:{
        changeFilterNumber: (state,action)=>{
            return action.payload;
        },
        reset: (state)=>{
            return 1000000;
        }
    }
});

export const {reset,changeFilterNumber} = priceRangeSlice.actions;
export default priceRangeSlice.reducer; 