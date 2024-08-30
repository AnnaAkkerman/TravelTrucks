// import axios from "axios";

// const urlTrending = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

// const options = {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2JjNTk1NDdjZTJkMzJmZWE0ZWNkMGE0OTc3YmE0NyIsInN1YiI6IjY2MGM4YWUwOWM5N2JkMDE3Y2E1OTg2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2dPpTJ4dSZS6vFnv8kN7P3TsnDIg4KoGK0-WpcQ-52s",
//   },
// };
// export const fetchTrendingcampers = async () => {
//   const response = await axios.get(urlTrending, options);

//   return response.data.items;
// };

// export const fetchCamper = async () => {
//   const response = await axios.get(
//     `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`,
//     options
//   );

//   return response.data.items;
// };

// export const fetchCamperDetailsById = async (camperId) => {
//   const response = await axios.get(
//     `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${camperId}`,
//     options
//   );

//   return response;
// };

// export const fetchCamperCredits = async (camperId) => {
//   const response = await axios.get(
//     `https://api.thecamperdb.org/3/camper/${camperId}/credits?language=en-US`,
//     options
//   );

//   return response.data.cast;
// };

// export const fetchcamperReviews = async (camperId) => {
//   const response = await axios.get(
//     `https://api.thecamperdb.org/3/camper/${camperId}/reviews?language=en-US`,
//     options
//   );

//   return response.data.results;
// };
