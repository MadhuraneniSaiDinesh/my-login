import axios from "axios";

const API = axios.create({
  baseURL: "https://my-login-pgxf.onrender.com"
});

export const loginUser = (data) => {
  return API.post("/login", data);
};

export const signupUser = (data) => {
  return API.post("/signup", data);
};