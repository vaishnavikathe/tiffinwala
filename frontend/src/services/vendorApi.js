import API from "./api";

// Dashboard
export const getDashboard = () => API.get("/vendor/dashboard");

// Plans
export const getPlans = () => API.get("/vendor/plans");
export const createPlan = (data) => API.post("/vendor/plans", data);
export const updatePlan = (id, data) => API.put(`/vendor/plans/${id}`, data);
export const deletePlan = (id) => API.delete(`/vendor/plans/${id}`);

// Menu
export const addMenu = (data) => API.post("/vendor/menu", data);

// Users
export const getUsers = () => API.get("/vendor/users");