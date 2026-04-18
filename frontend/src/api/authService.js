import API from "./api";

// USER
export const userLogin = (data) => API.post("/user/login", data);
export const userRegister = (data) => API.post("/user/register", data);

// VENDOR
export const vendorLogin = (data) => API.post("/vendor/login", data);
export const vendorRegister = (data) => API.post("/vendor/register", data);