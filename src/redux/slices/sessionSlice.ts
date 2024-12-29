import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sessionStatus:"inactive"
    // active, inactive, and session warning will be all the possible states
}

const sessionSlice = createSlice({
    name:"sessionData",
    initialState,
    reducers:{
        setSessionStatus:(state,action)=>{
            return action.payload;
        }
    }
})

export const {setSessionStatus} = sessionSlice.actions;
export default sessionSlice.reducer;