import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Navigation = () => {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/campers" className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
