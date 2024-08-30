import { useState } from "react";
import css from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/filter/selectors";
import { setFilter, updateFilters } from "../../redux/filter/slice";

const Filter = () => {
  const dispatch = useDispatch();

  const [localFilters, setLocalFilters] = useState({
    location: "",
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Bathroom: false,
    Van: false,
    FullyIntegrated: false,
    Alcove: false,
  });

  const handleFilterChange = (filter) => {
    setLocalFilters((prev) => {
      const updatedFilters = {
        ...prev,
        [filter]: !prev[filter],
      };
      return updatedFilters;
    });
  };

  const handleLocationChange = (e) => {
    setLocalFilters((prev) => ({
      ...prev,
      location: e.target.value,
    }));
  };

  const handleSearchClick = () => {
    dispatch(updateFilters(localFilters)); // Обновляем фильтры в Redux
  };

  return (
    <aside className={css.filters}>
      <div className={css.location}>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={localFilters.location}
          onChange={handleLocationChange}
        />
      </div>
      <div>
        <div className={css.filterGroup}>
          <h3>Vehicle equipment</h3>
          <button
            className={`${css.filter} ${localFilters.AC ? css.active : ""}`}
            onClick={() => handleFilterChange("AC")}
          >
            AC
          </button>
          <button
            className={`${css.filter} ${
              localFilters.Automatic ? css.active : ""
            }`}
            onClick={() => handleFilterChange("Automatic")}
          >
            Automatic
          </button>
          <button
            className={`${css.filter} ${
              localFilters.Kitchen ? css.active : ""
            }`}
            onClick={() => handleFilterChange("Kitchen")}
          >
            Kitchen
          </button>
          <button
            className={`${css.filter} ${localFilters.TV ? css.active : ""}`}
            onClick={() => handleFilterChange("TV")}
          >
            TV
          </button>
          <button
            className={`${css.filter} ${
              localFilters.Bathroom ? css.active : ""
            }`}
            onClick={() => handleFilterChange("Bathroom")}
          >
            Bathroom
          </button>
        </div>

        <div className={css.filterGroup}>
          <h3>Vehicle type</h3>
          <button
            className={`${css.filter} ${localFilters.Van ? css.active : ""}`}
            onClick={() => handleFilterChange("Van")}
          >
            Van
          </button>
          <button
            className={`${css.filter} ${
              localFilters.FullyIntegrated ? css.active : ""
            }`}
            onClick={() => handleFilterChange("FullyIntegrated")}
          >
            Fully Integrated
          </button>
          <button
            className={`${css.filter} ${localFilters.Alcove ? css.active : ""}`}
            onClick={() => handleFilterChange("Alcove")}
          >
            Alcove
          </button>
        </div>
      </div>

      <button className={css.searchBtn} onClick={handleSearchClick}>
        Поиск
      </button>
    </aside>
  );
};

export default Filter;
