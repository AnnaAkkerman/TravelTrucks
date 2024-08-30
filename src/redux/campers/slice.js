import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

export const INITIAL_STATE_campers = {
  campers: {
    items: [],
    loading: false,
    error: null,
  },
};

const handlePending = (state) => {
  state.campers.loading = true;
};

const handleRejected = (state, action) => {
  state.campers.loading = false;
  state.campers.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE_campers,
  reducers: {
    clearCampers: (state) => {
      state.campers.items = [];
      state.campers.loading = false;
      state.campers.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campers.loading = false;
        state.campers.error = null;
        state.campers.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const { clearCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
