// client/src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://bangalore-house-price-prediction-gnp6.onrender.com",  // Flask backend
});

export const predictPrice = (data) =>
  API.post("/predict_home_price", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
