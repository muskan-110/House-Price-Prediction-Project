// client/src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",  // Flask backend
});

export const predictPrice = (data) =>
  API.post("/predict_home_price", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
