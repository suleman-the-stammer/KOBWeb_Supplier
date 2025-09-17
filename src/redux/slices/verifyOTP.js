import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    verifyOTP: null,
}

export const verifyOTPSlice = createSlice({
    name: "verifyOTP",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.isLoading = true;
            state.answer = null;
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false;
            state.verifyOTP = action.payload;
        },
        fetchError: (state, action) => {
            state.isLoading = false;
            state.verifyOTP = null;
            state.error = action.payload;
        }
    }
});

const verifyOTPSliceReducer = verifyOTPSlice.reducer;
export const verifyOTPSliceAction = verifyOTPSlice.actions;

export default verifyOTPSliceReducer;