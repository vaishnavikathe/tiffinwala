import axios from "axios";

// Base API instance
const API = axios.create({
  baseURL: "http://localhost:5000/api", // change if needed
  headers: {
    "Content-Type": "application/json",
  },
});

// =========================
// AUTH APIs
// =========================

export const loginVendor = async (data) => {
  try {
    const response = await API.post("/vendors/login", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};

export const registerVendor = async (data) => {
  try {
    const response = await API.post("/vendors/register", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
};

export default API;