import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoading: false,
    user: null,
    error: null
}

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        fetchError: (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.error = action.payload;
        },
    },
});

const registerReducer = registerSlice.reducer;
export const registerActions = registerSlice.actions;

export default registerReducer;