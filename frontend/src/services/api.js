import axios from "axios";

// Base API instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// =========================
// USER APIs
// =========================

export const loginUser = async (data) => {
  try {
    const response = await API.post("/user/login", data); // ✅ FIXED
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "User login failed" };
  }
};

export const registerUser = async (data) => {
  try {
    const response = await API.post("/user/register", data); // ✅ FIXED
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "User registration failed" };
  }
};

// =========================
// VENDOR APIs
// =========================

export const loginVendor = async (data) => {
  try {
    const response = await API.post("/vendor/login", data); // ✅ FIXED
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Vendor login failed" };
  }
};

export const registerVendor = async (data) => {
  try {
    const response = await API.post("/vendor/register", data); // ✅ FIXED
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Vendor registration failed" };
  }
};

export default API;