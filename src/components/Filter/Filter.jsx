import { useState } from "react";
import css from "./Filter.module.css";

const Filter = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [filters, setFilters] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Bathroom: false,
    Van: false,
    FullyIntegrated: false,
    Alcove: false,
  });

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const handleSearchClick = () => {
    onSearch({ location, ...filters });
  };

  return (
    <aside className={css.filters}>
      <div className={css.location}>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div>
        <div className={css.filterGroup}>
          <h3>Vehicle equipment</h3>
          <button
            className={`${css.filter} ${filters.AC ? css.active : ""}`}
            onClick={() => handleFilterChange("AC")}
          >
            AC
          </button>
          <button
            className={`${css.filter} ${filters.Automatic ? css.active : ""}`}
            onClick={() => handleFilterChange("Automatic")}
          >
            Automatic
          </button>
          <button
            className={`${css.filter} ${filters.Kitchen ? css.active : ""}`}
            onClick={() => handleFilterChange("Kitchen")}
          >
            Kitchen
          </button>
          <button
            className={`${css.filter} ${filters.TV ? css.active : ""}`}
            onClick={() => handleFilterChange("TV")}
          >
            TV
          </button>
          <button
            className={`${css.filter} ${filters.Bathroom ? css.active : ""}`}
            onClick={() => handleFilterChange("Bathroom")}
          >
            Bathroom
          </button>
        </div>

        <div className={css.filterGroup}>
          <h3>Vehicle type</h3>
          <button
            className={`${css.filter} ${filters.Van ? css.active : ""}`}
            onClick={() => handleFilterChange("Van")}
          >
            Van
          </button>
          <button
            className={`${css.filter} ${
              filters.FullyIntegrated ? css.active : ""
            }`}
            onClick={() => handleFilterChange("FullyIntegrated")}
          >
            Fully Integrated
          </button>
          <button
            className={`${css.filter} ${filters.Alcove ? css.active : ""}`}
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
