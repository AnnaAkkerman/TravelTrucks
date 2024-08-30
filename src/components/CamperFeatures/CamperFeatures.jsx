import { useOutletContext } from "react-router-dom";
import css from "./CamperFeatures.module.css";

const CamperFeatures = () => {
  const { camperDetails } = useOutletContext();

  if (!camperDetails) return null;

  return (
    <div className={css.camperContainer}>
      <h1>Vehicle details</h1>
      <div>
        <p>{camperDetails.form}</p>
        <p>{camperDetails.location}</p>
        <p>&euro;{camperDetails.price}</p>
      </div>
    </div>
  );
};

export default CamperFeatures;
