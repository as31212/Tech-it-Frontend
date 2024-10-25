import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    auth:false,
    id: "",
    email: "",
    role: "",
    wishlist: [],
    cart: [],
    token: ""
  },
  reducers: {
    login: (state, action) => {// when dealing with a complex data structure like an object, you want to mutate the state directly rather than returning the state
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.wishlist = action.payload.wishlist;
      state.cart = action.payload.cart;
      state.auth = true;
    },
    logout: (state) => {
      state.auth = false;
      state.id = "";
      state.email = "null";
      state.role = "";
      state.wishlist = [];
      state.cart = [];
    },
  },
});

export const { login,logout } = userDataSlice.actions;
export default userDataSlice.reducer;
