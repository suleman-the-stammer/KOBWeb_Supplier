import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    questions: null,
    answer: null,
    error: null,

}

export const securityQuestionsSlice = createSlice({
    name: "security",
    initialState,
    reducers: {
        getQuestions: (state, action) => {
            state.questions = action.payload;
        },
        fetchStart: (state) => {
            state.isLoading = true;
            state.answer = null;
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false;
            state.answer = action.payload;
        },
        fetchError: (state, action) => {
            state.isLoading = false;
            state.answer = null;
            state.error = action.payload;
        }
    }
});

const securityQuestionsReducer = securityQuestionsSlice.reducer;
export const securityQuestionsAction = securityQuestionsSlice.actions;

export default securityQuestionsReducer;