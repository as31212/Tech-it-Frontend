import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: "product",
    initialState: {
        _id: "",
        name: "",
        price: 0,
        categories: [],
        mainImage: "",
        images: [],
    },
    reducers: {
        populate: (state, action) => {
            return { ...action.payload };
        },
        reset: () => {
            // Returns the initial state, effectively resetting the product details
            return {
                _id: "",
                name: "",
                price: 0,
                categories: [],
                mainImage: "",
                images: [],
            };
        }
    }
});

export const { populate, reset } = productSlice.actions;
export default productSlice.reducer;
