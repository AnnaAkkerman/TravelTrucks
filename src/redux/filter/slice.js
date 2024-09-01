import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  AC: false,
  transmission: "",
  form: "",
  Kitchen: false,
  TV: false,
  Bathroom: false,
  microwave: false,
  gas: false,
  radio: false,
  refrigerator: false,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    clearFilters: () => initialState, // Сбрасываем состояние
    updateFilters(state, action) {
      return {
        ...state,
        ...action.payload, // Обновляет только измененные фильтры
      };
    },
    applyFilters(state, action) {
      state = { ...initialState, ...action.payload }; // Обновляет состояние фильтров на основе новых данных
    },
  },
});

export const { applyFilters, clearFilters, updateFilters } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
