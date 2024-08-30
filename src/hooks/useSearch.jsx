import { useState } from "react";
import { fetchCampers } from "../redux/campers/operations";
export const useSearch = () => {
  const [campers, setcampers] = useState([]);
  const [topic, setTopic] = useState("");

  const handleSearch = async (inputedTopic) => {
    try {
      setcampers([]);
      const response = await fetchCampers(inputedTopic);
      setcampers(response);
      setTopic(inputedTopic);
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    campers,
    setcampers,
    topic,
    handleSearch,
  };
};
