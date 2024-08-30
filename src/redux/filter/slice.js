import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  AC: false,
  Automatic: false,
  Kitchen: false,
  TV: false,
  Bathroom: false,
  Van: false,
  FullyIntegrated: false,
  Alcove: false,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetFilters: (state) => {
      return initialState; // сброс всех фильтров к начальному состоянию
    },
  },
});

export const { updateFilters, setFilter, resetFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
