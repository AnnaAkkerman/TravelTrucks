import { Link, useLocation } from "react-router-dom";
import css from "./CamperList.module.css";

const CamperList = ({ campers }) => {
  const location = useLocation();

  return (
    <main>
      <ul>
        {Array.isArray(campers) &&
          campers.map((camper) => (
            <li key={camper.id}>
              <img
                src={camper.gallery[0].original}
                alt={camper.name}
                width={250}
              />
              <div>
                <h2>{camper.name}</h2>
                <p>&euro;{camper.price}</p>
              </div>
              <div>
                <p>{camper.rating}</p>
                <Link to={`/campers/${camper.id}`} state={{ from: location }}>
                  <p>({camper.reviews.length} Reviews)</p>
                </Link>
                <p>{camper.location}</p>
              </div>
              <p className={css.description}>{camper.description}</p>
              <ul>
                <li>{camper.transmission}</li>
                {camper.AC && <li>AC</li>}
                {camper.kitchen && <li>Kitchen</li>}
                {camper.TV && <li>TV</li>}
                {camper.bathroom && <li>Bathroom</li>}
                {camper.gas && <li>Gas</li>}
                {camper.radio && <li>Radio</li>}
                {camper.refrigerator && <li>Refrigerator</li>}
                {camper.water && <li>Water</li>}
                <li>{camper.engine}</li>
              </ul>
              <Link to={`/campers/${camper.id}`} state={{ from: location }}>
                <button>Show more</button>
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default CamperList;
