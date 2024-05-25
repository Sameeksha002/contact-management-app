import axios from "axios";

const API_URL = "https://disease.sh/v3/covid-19";

export const fetchWorldwideData = async () => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};

export const fetchCountryData = async () => {
  const response = await axios.get(`${API_URL}/countries`);
  return response.data;
};

export const fetchHistoricalData = async () => {
  const response = await axios.get(`${API_URL}/historical/all?lastdays=all`);
  return response.data;
};
