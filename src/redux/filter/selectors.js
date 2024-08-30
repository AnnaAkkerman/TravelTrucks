import { createSelector } from "@reduxjs/toolkit";

// export const selectCampers = (state) => state.campers.items;

// export const selectFilteredCampers = createSelector(
//   [selectCampers, (state) => state.filters.selectedFilters],
//   (campers, selectedFilters) => {
//     if (selectedFilters.length === 0) {
//       return campers;
//     }
//     return campers.filter((camper) =>
//       selectedFilters.every((filter) => camper[filter.toLowerCase()] === true)
//     );
//   }
// );

// export const selectFilteredCampers = createSelector(
//   [selectCampers, selectNameFilter],
//   (campers, filters) => {
//     return campers.filter((contact) =>
//       contact.name.toLowerCase().includes(filters.toLowerCase())
//     );
//   }
// );

export const selectFilteredCampers = createSelector(
  (state) => state.campersData.campers.items,
  (state) => state.filters.filters,
  (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation = filters.location
        ? camper.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;
      const matchesAC = filters.AC ? camper.AC === true : true;
      const matchesAutomatic = filters.Automatic
        ? camper.transmission === "Automatic"
        : true;
      const matchesKitchen = filters.Kitchen ? camper.kitchen === true : true;
      const matchesTV = filters.TV ? camper.TV === true : true;
      const matchesBathroom = filters.Bathroom
        ? camper.bathroom === true
        : true;
      const matchesVan = filters.Van ? camper.type === "Van" : true;
      const matchesFullyIntegrated = filters.FullyIntegrated
        ? camper.type === "Fully Integrated"
        : true;
      const matchesAlcove = filters.Alcove ? camper.type === "Alcove" : true;

      return (
        matchesLocation &&
        matchesAC &&
        matchesAutomatic &&
        matchesKitchen &&
        matchesTV &&
        matchesBathroom &&
        matchesVan &&
        matchesFullyIntegrated &&
        matchesAlcove
      );
    });
  }
);
