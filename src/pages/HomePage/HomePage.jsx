import CamperList from "../../components/CamperList/CamperList";
import { useSearch } from "../../hooks/useSearch";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  return (
    <div>
      <h1>Campers of your dreams</h1>
      <h2>You can find everything you want in our catalog</h2>
      <button>View now</button>
    </div>
  );
};

export default HomePage;
