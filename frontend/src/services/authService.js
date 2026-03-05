import axios from "axios";

const API = axios.create({
  baseURL: "https://my-login-pgxf.onrender.com/api"
});

export const signupUser = (data) => {
  return API.post("/signup", data);
};

export const loginUser = (data) => {
  return API.post("/login", data);
};