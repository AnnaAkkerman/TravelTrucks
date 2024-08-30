import { useEffect, lazy, Suspense, useState } from "react";
import css from "./CampersPage.module.css";
import Loader from "../../components/Loader/Loader";
import Filter from "../../components/Filter/Filter";
import { selectCampers } from "../../redux/campers/selectors";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredCampers,
  selectFilters,
} from "../../redux/filter/selectors";

const CamperList = lazy(() => import("../../components/CamperList/CamperList"));

const CampersPage = () => {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectFilteredCampers);
  // const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  // const handleSearch = (filters) => {
  //   for (const [filter, value] of Object.entries(filters)) {
  //     dispatch(setFilter({ filter, value }));
  //   }
  // };

  return (
    <Suspense fallback={<Loader />}>
      <div className={css.catalogContainer}>
        <Filter />
        <CamperList campers={filteredCampers} />
      </div>
    </Suspense>
  );
};

export default CampersPage;
