import { createSelector } from "@reduxjs/toolkit";
import { selectCampers } from "../campers/selectors";

export const selectFilters = (state) => state.filters;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
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
