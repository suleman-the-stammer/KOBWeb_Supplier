import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false, // Indicates whether the sign-in process is in progress.
    user: null, // You may store user data upon successful sign-in.
    error: null, // To store any sign-in related errors.
};

export const signInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.isLoading = true;
            state.error = null; // Reset any previous errors.
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload; // Store the signed-in user data if needed.
        },
        fetchError: (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.error = action.payload; // Store the sign-in error.
        },
    },
});

const signInReducer = signInSlice.reducer;
export const signInActions = signInSlice.actions;

export default signInReducer;
