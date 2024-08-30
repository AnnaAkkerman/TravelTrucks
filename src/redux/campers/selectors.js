import { createSelector } from "@reduxjs/toolkit";
// import { selectNameFilter } from "../filters/selectors";

export const selectCampers = (state) => state.campersData.campers.items;
// export const selectFilteredCampers = createSelector(
//   [selectCampers, selectNameFilter],
//   (campers, filters) => {
//     return campers.filter((contact) =>
//       contact.name.toLowerCase().includes(filters.toLowerCase())
//     );
//   }
// );

export const selectLoading = (state) => state.campersData.campers.loading;
export const selectError = (state) => state.campersData.campers.error;
