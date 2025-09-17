import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: null,
    states: null,
    cities: null
}

export const locationsSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        getCountries: (state, action) => {
            state.countries = action.payload;
        },
        getStates: (state, action) => {
            state.states = action.payload;
        },
        getCities: (state, action) => {
            state.cities = action.payload;
        }
    }
});

const locationsReducer = locationsSlice.reducer;
export const locationsActions = locationsSlice.actions;

export default locationsReducer;