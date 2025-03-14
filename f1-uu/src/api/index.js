import axios from "axios";

// const API_URL = "http://127.0.0.1:5000/api";
const API_URL = "https://just-a-f1-race-prediction.onrender.com/api";

export const getData = async () => {
  try {
    const response = await axios.get(`${API_URL}/hello`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const withLocationPrediction = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/prediction-with-location`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
export const withOutLocationPrediction = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/prediction-with-out-location`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
