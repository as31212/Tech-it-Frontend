import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    modalItem:"",
    isActive:false
}
const modalDataSlice = createSlice({
    name:"modalData",
    initialState,
    reducers:{
        toggleModal: (state)=>{
            state.isActive = !state.isActive;
            
        },
        updateModalItem: (state,action)=>{
            state.modalItem = action.payload;
        },
        clearModal: ()=>{
            return initialState;
        }
    }
})

export const {toggleModal,updateModalItem,clearModal} = modalDataSlice.actions;
export default modalDataSlice.reducer;
