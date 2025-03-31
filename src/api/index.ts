import axios from "axios";
export const getQuotes = async () => {
  // Fetch data from API
  const response = await axios.get("https://dummyjson.com/quotes/random");
  return response.data;
};
