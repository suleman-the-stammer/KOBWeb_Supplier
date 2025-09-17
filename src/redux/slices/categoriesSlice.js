import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    categories: null,
    error: null,
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
        },
        fetchError: (state, action) => {
            state.isLoading = false;
            state.categories = null;
            state.error = action.payload;
        }
    }
});

const categoriesReducer = categoriesSlice.reducer;
export const categoriesActions = categoriesSlice.actions;

export default categoriesReducer;