import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name:"token",
    initialState:null,
    reducers:{
        loginToken:(_state,action)=>{
            return action.payload;
        },
        logoutToken:()=>{
            return null; //when dealing with primitive values you return rather than mutating
        }
    }
})

export default tokenSlice.reducer;
export const {loginToken,logoutToken} = tokenSlice.actions; 