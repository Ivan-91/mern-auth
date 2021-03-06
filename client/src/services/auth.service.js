import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

const register = (username, surname, email, password, role) => {
  return axios.post(API_URL + "signup", {
    username,
    surname,
    email,
    password,
    role
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};