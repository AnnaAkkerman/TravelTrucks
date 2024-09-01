import { useOutletContext } from "react-router-dom";
import css from "./CamperFeatures.module.css";
import sprite from "../../../public/sprite.svg";

const CamperFeatures = () => {
  const { camperDetails } = useOutletContext();

  if (!camperDetails) return null;
  const features = [
    {
      key: "transmission",
      label: "Automatic",
      svg: "icon-diagram",
      value: "automatic",
    },
    { key: "kitchen", label: "Kitchen", svg: "icon-cup-hot" },
    { key: "AC", label: "AC", svg: "icon-wind" },
    { key: "bathroom", label: "Bathroom", svg: "icon-bi_droplet" },
    { key: "TV", label: "TV", svg: "icon-tv" },
    { key: "radio", label: "Radio", svg: "icon-ui-radios" },
    { key: "gas", label: "Gas", svg: "icon-fuel-pump" },
    { key: "microwave", label: "Microwave", svg: "wave" },
    { key: "refrigerator", label: "Frige", svg: "frige" },
    { key: "engine", label: "Hybrid", svg: "engine", value: "hybrid" },
    { key: "engine", label: "Diesel", svg: "engine", value: "diesel" },
    { key: "engine", label: "Petrol", svg: "icon-fuel-pump", value: "petrol" },
  ];
  return (
    <div className={css.camperContainer}>
      <div>
        <div className={css.features}>
          {features.map((feature) => {
            const isFeatureAvailable =
              camperDetails[feature.key] === true ||
              camperDetails[feature.key] === feature.value;
            return isFeatureAvailable ? (
              <div className={css.feature} key={feature.key}>
                <svg className={css.icon} width="20" height="20">
                  <use href={`${sprite}#${feature.svg}`} />
                </svg>
                <span>{feature.label}</span>
              </div>
            ) : null;
          })}
        </div>
      </div>
      <h3 className={css.equipmentTitle}>Vehicle details</h3>
      <div className={css.equipmentContainer}>
        <div className={css.equipmentDetails}>
          <p>Form </p>
          <p>{camperDetails.form}</p>
        </div>
        <div className={css.equipmentDetails}>
          <p>Length</p>
          <p>{camperDetails.length}</p>
        </div>
        <div className={css.equipmentDetails}>
          <p>Width</p>
          <p>{camperDetails.width}</p>
        </div>
        <div className={css.equipmentDetails}>
          <p>Height</p>
          <p>{camperDetails.height}</p>
        </div>
        <div className={css.equipmentDetails}>
          <p>Tank</p>
          <p>{camperDetails.tank}</p>
        </div>
        <div className={css.equipmentDetails}>
          <p>Consumption</p>
          <p> {camperDetails.consumption}</p>
        </div>
      </div>
    </div>
  );
};

export default CamperFeatures;
