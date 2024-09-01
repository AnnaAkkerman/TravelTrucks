import { useEffect, useState, useRef, Suspense } from "react";
import {
  Link,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { HiArrowLeft } from "react-icons/hi";
import css from "./CamperDetailsPage.module.css";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import { fetchCamperDetailsById } from "../../redux/campers/operations.js";

const CamperDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("features"); // Управляет отображением по умолчанию
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");
  const { camperId } = useParams();
  const [camperDetails, setCamperDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!camperId) return;
    const fetchCamperDetails = async () => {
      try {
        setLoading(true);
        const { data } = await fetchCamperDetailsById(camperId);
        setCamperDetails(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (camperId) {
      fetchCamperDetails();
    }
  }, [camperId]);

  useEffect(() => {
    if (
      camperId &&
      !location.pathname.includes("features") &&
      !location.pathname.includes("reviews")
    ) {
      navigate("features", { replace: true });
    }
  }, [camperId, location.pathname, navigate]);

  return (
    <main>
      <div className={css.container}>
        {loading && <Loader />}
        {camperDetails !== null && (
          <div className={css.camper}>
            <div className={css.camperContainer}>
              <h1>{camperDetails.name}</h1>
              <div>
                <p>{camperDetails.rating}</p>
                <Link
                  to={`/campers/${camperDetails.id}`}
                  state={{ from: location }}
                >
                  <p>({camperDetails.reviews.length} Reviews)</p>
                </Link>
                <p>{camperDetails.location}</p>
              </div>
              <p>&euro;{Number(camperDetails.price).toFixed(2)}</p>
            </div>
            <ul className={css.camperList}>
              {Array.isArray(camperDetails.gallery) &&
                camperDetails.gallery.map((camperPhoto, index) => (
                  <li key={index}>
                    <img
                      src={camperPhoto.original}
                      alt={camperDetails.name}
                      className={css.camperListPhoto}
                      width={292}
                    />
                  </li>
                ))}
            </ul>
            <p className={css.description}>{camperDetails.description}</p>
          </div>
        )}
        <div className={css.camperInformation}>
          <ul className={css.detailsList}>
            <li className={css.detailsItem}>
              <Link to="features" onClick={() => setSelectedTab("features")}>
                Features
              </Link>
            </li>
            <li className={css.detailsItem}>
              <Link to="reviews" onClick={() => setSelectedTab("reviews")}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <div className={css.detailsContainer}>
          <Suspense fallback={<Loader />}>
            <Outlet context={{ camperDetails }} />
          </Suspense>
          <BookingForm />
        </div>
      </div>
    </main>
  );
};

export default CamperDetailsPage;
