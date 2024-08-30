import { useEffect, lazy, Suspense, useState } from "react";
import css from "./CampersPage.module.css";
import Loader from "../../components/Loader/Loader";
import Filter from "../../components/Filter/Filter";
import { selectCampers } from "../../redux/campers/selectors";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";

const CamperList = lazy(() => import("../../components/CamperList/CamperList"));

const CampersPage = () => {
  const [loading, setLoading] = useState(false);
  const [filteredCampers, setFilteredCampers] = useState([]);
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    const getTrendingcampers = async () => {
      try {
        setLoading(true);
        dispatch(fetchCampers);
        setFilteredCampers(campers);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getTrendingcampers();
  }, [dispatch, campers]);

  const handleSearch = (filters) => {
    const filtered = campers.filter((camper) => {
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

    setFilteredCampers(filtered);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className={css.catalogContainer}>
        <Filter onSearch={handleSearch} />
        <CamperList campers={filteredCampers} />
      </div>
    </Suspense>
  );
};

export default CampersPage;
