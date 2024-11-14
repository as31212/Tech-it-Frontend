import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const productFilterSlice = createSlice({
    name: "productFilter",
    initialState: [] as string[],  // Explicitly define the initial state as an array of strings
    reducers: {
        addCategoryToFilter: (state, action: PayloadAction<string>) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
        removeCategoryFromFilter: (state, action: PayloadAction<string>) => {
            return state.filter((el) => el !== action.payload);
        }
    }
});

export const { addCategoryToFilter, removeCategoryFromFilter } = productFilterSlice.actions;
export default productFilterSlice.reducer;
