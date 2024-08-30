import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFilters: [],
  filters: {
    location: "",
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Bathroom: false,
    Van: false,
    FullyIntegrated: false,
    Alcove: false,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const filter = action.payload;
      if (state.selectedFilters.includes(filter)) {
        state.selectedFilters = state.selectedFilters.filter(
          (f) => f !== filter
        );
      } else {
        state.selectedFilters.push(filter);
      }
    },
    resetFilters: (state) => {
      state.selectedFilters = [];
    },
    setFilter(state, action) {
      const { filter, value } = action.payload;
      state[filter] = value;
    },
  },
});

export const { toggleFilter, resetFilters, setFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
