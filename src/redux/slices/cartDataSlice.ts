import { createSlice } from "@reduxjs/toolkit";

const cartDataSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        populateCart:(state,action)=>{
            return action.payload;
        }
    }
})

export const {populateCart} = cartDataSlice.actions;
export default cartDataSlice.reducer;