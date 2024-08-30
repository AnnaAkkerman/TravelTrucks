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
    // Если нет состояния, устанавливаем "features" как активный по умолчанию
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
      <button className={css.camperBtn} type="button">
        <Link to={backLink.current} className={css.camperLink}>
          <HiArrowLeft size="14" />
          Go Back
        </Link>
      </button>
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
            <p>&euro;{camperDetails.price}</p>
          </div>
          <ul>
            {Array.isArray(camperDetails.gallery) &&
              camperDetails.gallery.map((camperPhoto, index) => (
                <li key={index}>
                  <img
                    src={camperPhoto.original}
                    alt={camperDetails.name}
                    width={250}
                  />
                </li>
              ))}
          </ul>
          <p className={css.description}>{camperDetails.description}</p>
        </div>
      )}
      <div className={css.camperInformation}>
        <ul>
          <li>
            <Link to="features" onClick={() => setSelectedTab("features")}>
              Features
            </Link>
          </li>
          <li>
            <Link to="reviews" onClick={() => setSelectedTab("reviews")}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.detailsContainer}>
        <BookingForm />
        <Suspense fallback={<Loader />}>
          <Outlet context={{ camperDetails }} />
        </Suspense>
      </div>
    </main>
  );
};

export default CamperDetailsPage;
